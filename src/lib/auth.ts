import NextAuth, { User as DefaultUser } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { User } from "./models/user";
import { connnectToDb } from "./utils";
import { authConfig } from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        Credentials({
            async authorize(credentials, request) {
                const user: DefaultUser | null = await User.findOne({
                    email: credentials.email,
                });
                if (user) {
                    return user;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, credentials }) {
            if (account?.provider === "google") {
                connnectToDb();
                try {
                    const savedUser = await User.findOne({
                        email: profile?.email,
                    });
                    if (savedUser) {
                        return true;
                    }

                    // Save new user to database
                    const newUser = new User({
                        name: profile?.name,
                        email: profile?.email,
                        image: profile?.image,
                    });
                    await newUser.save();
                } catch (err) {
                    console.log(err);
                    // User will not be authenticated
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks,
    },
});
