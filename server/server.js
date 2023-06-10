import app from "./app.js";
import { dbconecting } from "./config/dbconection.js";
dbconecting()
app.listen(process.env.PORT,() =>
console.log(`port is running on ${ process.env.PORT}`)
);