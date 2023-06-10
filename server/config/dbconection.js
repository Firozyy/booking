import mongoose from "mongoose";

export const dbconecting = () => {
    mongoose.connect(process.env.Mongo_uri)
    .then(data => console.log(`conected with ${data.connection.host}`) )
    .catch(e => { console.log("db conection problem"); })
}


