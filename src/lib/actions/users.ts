"use server";

import { User } from "../models/user";
import { connnectToDb } from "../utils";

export const getUsers = async () => {
    try {
        await connnectToDb();
        const savedUsers = await User.find({});
        return savedUsers;
    } catch (err) {
        console.log("getUsers Error: ", err);
        throw new Error("Users Fetch failed");
    }
};