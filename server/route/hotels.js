import express from "express";

import { CountbyType, Countbycity, createHotels, deleteHotel, getHotel, getHotelRooms, getallHotels, updateHotel } from "../controlers/hotelsControler.js";
import { adminAuthanticate, isAuthanticate } from "../midlewares/authenticaion.js";
const router = express.Router();

router.route('/createhotel').post(isAuthanticate, adminAuthanticate, createHotels);
router.route('/updatehotel/:id').put(isAuthanticate, adminAuthanticate, updateHotel);
router.route('/deleteHotel/:id').put(isAuthanticate, adminAuthanticate, deleteHotel)
router.route("/getHotel/:id").get(getHotel);
//GET ALL
router.route("/getallhotel").get(getallHotels);
router.route("/Countbycity").get(Countbycity) ;
router.route("/countbytype").get(CountbyType) ;
router.route("/room/:id").get(getHotelRooms);



export default router