import Express from "express"
import 'dotenv/config'
import cookieParser from "cookie-parser";
import connectDb from "./config/db.js";
import factRoutes from "./routes/factRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const port = process.env.PORT || 8888;

connectDb()

const app = Express()
// body parser middleware
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))

//cookie parser middleware
app.use(cookieParser())

app.get("/", (req, res) =>{
    console.log("Hello from /")
    res.send("API running")
})

app.use("/api/facts", factRoutes)
app.use("/api/users", userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server running on  localhost:${port}`))