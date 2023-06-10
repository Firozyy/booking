import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controlers/userControler.js";
import { adminAuthanticate, isAuthanticate, verifyUser } from "../midlewares/authenticaion.js";

const router = express.Router();

router.route('/updateUser/:id').put(isAuthanticate, verifyUser, updateUser)

router.route('/DeleteUser/:id').delete(isAuthanticate, verifyUser, deleteUser)

router.route('/getuser/:id').get(isAuthanticate, verifyUser, getUser)

router.route('/getalluser').get(isAuthanticate, adminAuthanticate, getUsers)

export default router