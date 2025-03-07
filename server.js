import { connectDB } from "./config/db.js";
import { app } from "./middlewares/app.js";


let PORT = process.env.PORT
connectDB()

app.listen(PORT, () => console.log("This server is running on http://localhost:" + PORT))