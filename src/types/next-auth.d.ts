import { Session, User as DefaultUser, DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { TUser } from ".";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultUser & TUser;
    }
    interface User extends DefaultUser {
        id: string;
        isAdmin: boolean | undefined;
    }
}
