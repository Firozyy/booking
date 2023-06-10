import express from "express";
import dotenv from "dotenv"
import cookieparser from "cookie-parser"

const app = express();
dotenv.config({ path: './config/.env' });
import user from './route/user.js';
import auth from './route/auth.js'
import hotels from './route/hotels.js'
import rooms from './route/rooms.js'
import errorMiddleware from "./midlewares/errorMiddleware.js";

import cors from 'cors'
app.use(cors({
    origin: process.env.frontend_url,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT",]

}))

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({
    extended: true
}));

app.use("/api/v1", user);
app.use("/api/v1", auth)
app.use("/api/v1", hotels)
app.use("/api/v1", rooms)

// error midleware 

app.use(errorMiddleware)
export default app;