import express  from "express"; 
import {  createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controlers/roomControler.js";
import { adminAuthanticate, isAuthanticate } from "../midlewares/authenticaion.js";

const router =express.Router();

router.route('/createroom/:hotelid').post(isAuthanticate,adminAuthanticate,createRoom)
router.route('/deleteroom/:id/:hotelid').delete(isAuthanticate,adminAuthanticate,deleteRoom)
router.route('/updateRoom/:id').put(isAuthanticate,adminAuthanticate,updateRoom)
router.route('/RoomAvailability/:id').put(updateRoomAvailability)

router.route("/getRoom/:id").get(isAuthanticate,adminAuthanticate,getRoom) 
router.route("/getRooms").get(isAuthanticate,adminAuthanticate,getRooms) 

//GET ALL



export default router