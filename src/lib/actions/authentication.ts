"use server";

import { signIn, signOut } from "@/lib/auth";
import { connnectToDb } from "../utils";
import { User } from "../models/user";
import bcrypt from "bcryptjs";

// OAuth actions
export const handleGoogleLogin = async () => {
    await signIn("google");
};

// Credentials auth actions
// Login
export const handleLogin = async (state: Object, formData: FormData) => {
    const { email, password } = Object.fromEntries(formData);
    if (!email || !password || !(typeof password == "string")) {
        return { message: "Email and password required" };
    }
    try {
        await connnectToDb();
        const savedUser = await User.findOne({
            email,
        });
        if (!savedUser) {
            return { message: "Wrong email or password" };
        }

        const passwordMatched = await bcrypt.compare(
            password,
            savedUser.password
        );
        if (!passwordMatched) {
            return { message: "Wrong email or password" };
        }
        await signIn("credentials", { email, password, redirectTo: "/" });
    } catch (err) {
        console.log("Login action err: ", err);
        throw err;
    }
    return { success: true };
};

export const handleLogout = async () => {
    await signOut();
};

// Register
export const register = async (state: Object, formData: FormData) => {
    const { name, email, password, confirmPassword, image } =
        Object.fromEntries(formData);

    //Validation
    if (!name || !email || !password || !(typeof password == "string")) {
        return { message: "Fields name, email and password required" };
    }
    if (password !== confirmPassword) {
        return { message: "Passwords don't match" };
    }

    try {
        await connnectToDb();
        const savedUser = await User.findOne({ email });
        if (savedUser) {
            return { message: "User already exists" };
        }

        // Save new user to database with hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            image,
        });
        await newUser.save();
        return { success: true };
    } catch (err) {
        console.log(err);
        return { message: "Registration failed" };
    }
};
