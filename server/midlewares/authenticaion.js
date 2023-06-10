import jwt from "jsonwebtoken";


import { User } from "../model/userModel.js";
import ErrorHandler from "../utils/errorHanler.js";
import { catchAsyncError } from "./catchAsyncError.js";

export const isAuthanticate = catchAsyncError(async (req, res, next) => {

    const { token } = req.cookies;


    if (!token) {
        return next(new ErrorHandler('no token/not logined', 401))
    };

    const decoded = jwt.verify(token, process.env.SECURE_KEY);

    req.user = await User.findById(decoded._id);

    next();

});

export const adminAuthanticate = catchAsyncError(

    (req, res, next) => {

        const isAdmin = req.user.isAdmin
        console.log(isAdmin);
        if (!isAdmin) {

            return next(new ErrorHandler(` you are not autharized`, 403));

        }

        next();
    }
)

export const verifyUser = catchAsyncError(
    (req, res, next) => {

        if (req.user.id !== req.params.id) {
            return next(new ErrorHandler(` you are not autharized`, 403));

        }
        next();
    }
)

// export const verifyUser = (req, res, next) => {
//     verifyToken(req, res, next, () => {
//       if (req.user.id === req.params.id || req.user.isAdmin) {
//         next();
//       } else {
//         return next(createError(403, "You are not authorized!"));
//       }
//     });
//   };