import { Room } from "../model/roomModel.js";
import { catchAsyncError } from '../midlewares/catchAsyncError.js'
import { Hotels } from "../model/hotelsModel.js"
export const createRoom = catchAsyncError(
    async (req, res, next) => {
        const hotelid = req.params.hotelid;

        const newRoom = new Room(req.body);

        const savedRoom = await newRoom.save();



        const hotel = await Hotels.findByIdAndUpdate(hotelid, {
            $push: { rooms: savedRoom._id },
        });

        res.status(200).json(
            {
                success: true,
                savedRoom
            }
        )
    }
);

export const deleteRoom = catchAsyncError(
    async (req, res, next) => {
        const hotelId = req.params.hotelid;

        await Room.findByIdAndDelete(req.params.id);

        await Hotels.findByIdAndUpdate(hotelId, {
            $pull: { rooms: req.params.id },
        });

        res.status(200).json("Room has been deleted.");



    }
);

export const updateRoom = catchAsyncError(

    async (req, res, next) => {

        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedRoom);

    }

)


export const getRoom = catchAsyncError(async (req, res, next) => {

    const room = await Room.findById(req.params.id);
    res.status(200).json(room);

})
    ;
export const getRooms = catchAsyncError(
    async (req, res, next) => {

        const rooms = await Room.find();
        res.status(200).json(rooms);

    }
);
export const updateRoomAvailability = catchAsyncError(
    async (req, res, next) => {

        const date = req.body.dates
     console.log(date,"fghfghgh");

        const result = await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
                $push: {
                    "roomNumbers.$.unavailableDates": date
                },
            }
        );




        res.status(200).json("Room status has been updated.");
    }
);



