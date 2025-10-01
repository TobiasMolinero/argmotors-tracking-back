import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    refresh_tkn: { type: String },
    role: { type: String }
}, { timestamps: true })

export const UserModel = mongoose.model('Usuarios', userSchema) 