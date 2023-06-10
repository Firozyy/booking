import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false

    },

}, { timestamps: true });
userSchema.methods.getJWTtoken = function () {
    return Jwt.sign({ _id: this._id,isAdmin:this.isAdmin }, process.env.SECURE_KEY, {
        expiresIn: process.env.JWT_EXPIRY
    })
};


userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next();
})
//password check encrypt
userSchema.methods.comaparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)

};

export const User = mongoose.model("user", userSchema);