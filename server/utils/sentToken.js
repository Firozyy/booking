export const sentToken = function (res, message, user, statuscode = 200) {
    const token = user.getJWTtoken();
  
    // const options = {
    //     expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "none",
    //
    // };



    res.status(200).cookie("token", token).json({
        success: true,
        message,
        user
    })

}