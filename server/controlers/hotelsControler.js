import { catchAsyncError } from "../midlewares/catchAsyncError.js";
import { Hotels } from "../model/hotelsModel.js"
import { Room } from "../model/roomModel.js";

export const createHotels = catchAsyncError(
    async (req, res) => {


        const Hotel = new Hotels(
            req.body
        );
        await Hotel.save();
        res.status(200).json({
            sucess: true,
            message: Hotel
        })
    }
);




//updete
export const updateHotel = catchAsyncError(async (req, res, next) => {

    const Hotel = await Hotels.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );
    res.status(200).json(Hotel);

})


export const deleteHotel = catchAsyncError(
    async (req, res, next) => {

        await Hotels.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");



    }
)
export const getHotel =
    catchAsyncError(
        async (req, res, next) => {
            const hotel = await Hotels.findById(req.params.id);
            res.status(200).json(hotel);




        }
    )

export const getallHotels = catchAsyncError(
    async (req, res, next) => {
        const { features, limit, min, max, ...others } = req.query

        const hotels = await Hotels.find({ ...others, cheepestPrice: { $gt: min | 1, $lt: max || 999 } }).limit(limit)


        res.status(200).json(hotels);


    }


)
export const Countbycity = catchAsyncError(
    async (req, res, next) => {
        const cities = req.query.cities.split(",")
        const list = await Promise.all(cities.map(cities => {
            return Hotels.countDocuments({ city: cities })
        }))
        res.status(200).json(list);

    }
);

export const CountbyType = catchAsyncError(
    async (req, res, next) => {


        const hotelCount = await Hotels.countDocuments({ type: "hotel" });
        const resortCount = await Hotels.countDocuments({ type: "resort" })
        const villaCount = await Hotels.countDocuments({ type: "villa" })
        const apartmentCount = await Hotels.countDocuments({ type: "apartment" })



        res.status(200).json({
            succes: true,
            type: [
                { item: "hotel", count: hotelCount },
                { item: "apartment", count: apartmentCount },
                { item: "villa", count: villaCount },
                { item: "resort", count: resortCount },
            ],

        }

        );

    }
);


export const getHotelRooms = catchAsyncError(
    async (req, res, next) => {

        const hotel = await Hotels.findById(req.params.id);
        const list = await Promise.all(hotel.rooms.map((room) => {
            return Room.findById(room)
        }))
        res.status(200).json(list);
    }
);