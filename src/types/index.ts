import { SchemaTimestampsConfig, Document } from "mongoose";

export type TUser = Document & {
    name: string;
    email: string;
    image: string;
    password?: string;
    isAdmin?: boolean;
} & SchemaTimestampsConfig;

export type TPost = Document & {
    title: string;
    description?: string;
    image?: string;
    content?: string;
} & SchemaTimestampsConfig;
