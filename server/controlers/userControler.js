import { catchAsyncError } from "../midlewares/catchAsyncError.js";
import { User } from "../model/userModel.js";
import ErrorHandler from "../utils/errorHanler.js";
import { sentToken } from "../utils/sentToken.js";


export const register = catchAsyncError(
    async (req, res, next) => {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return next(new ErrorHandler("please input all field", 400))
        }

        let user = await User.findOne({ email });
        if (user) {
            return next(new ErrorHandler("already registerd mail", 400))
        };

         user = await User.findOne({ username });
        if (user) {
            return next(new ErrorHandler("already registerd username", 400))
        };

        user = new User({
            username,
            email,
            password,
        });
        await user.save();
        res.status(200).json({
            sucess: true,
            message: "success",
            user
        })
    }
);

export const login = catchAsyncError(async (req, res, next) => {



    const { username, password } = req.body

    let user = await User.findOne({ username }).select("+password");


    if (!username || !password) {
        return next(new ErrorHandler("please add all fields", 400))
    };



    if (!user) {
        return next(new ErrorHandler("Incorrect Username or password", 409))
    };

    const ismatch = await user.comaparePassword(password);
    if (!ismatch) {
        return next(new ErrorHandler("Incorrect Email or password", 409))
    };




    sentToken(res, `welcome  ${user.username}`, user, 201);
});


export const updateUser = catchAsyncError(async (req, res, next) => {

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );
    res.status(200).json(updatedUser);


})


export const deleteUser = catchAsyncError(
    async (req, res, next) => {

        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");

        next(err);

    }
)

export const getUser = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.params.id);
    res.status(200).json(user);

    next(err);

})
export const getUsers = catchAsyncError(async (req, res, next) => {

    const users = await User.find();
    res.status(200).json(users);

    next(err);

});