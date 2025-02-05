import mongoose from "mongoose";

const connection = {
    state: -1,
};

export const connnectToDb = async () => {
    // Use existing connection
    if (connection.state == 1) {
        console.log("Database already connected");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI || "");
        connection.state = db.connections[0].readyState;
        console.log("Database connected");
    } catch (err) {
        console.log("Connect to database error: ", err);
        throw new Error("Failed to connect to database");
    }
};