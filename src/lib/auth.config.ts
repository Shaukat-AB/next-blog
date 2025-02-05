import { NextAuthConfig, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { NextRequest } from "next/server";

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [], // Defined in auth file
    callbacks: {
        async jwt({ token, user }: { token: JWT; user: User }) {
            if (user) {
                token.user = { id: user.id, isAdmin: user.isAdmin };
            }
            return token;
        },
        async session({ session, token }: { session: any; token: JWT }) {
            if (token?.user) {
                session.user = { ...session.user, ...token.user };
            }
            return session;
        },
        async authorized({
            auth,
            request,
        }: {
            auth: Session | null;
            request: NextRequest;
        }) {
            const path = request?.nextUrl.pathname;
            const user = auth?.user;

            // Redirect to home page when user loggedin and visits login or register page
            if (user && (path.includes("login") || path.includes("register"))) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            // Only an admin should access admin page
            if (!user?.isAdmin && path.includes("admin")) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true;
        },
    },
};
