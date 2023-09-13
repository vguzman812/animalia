import Express from "express"
import 'dotenv/config'
import connectDb from "./config/db.js";
import factRoutes from "./routes/factRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const port = process.env.PORT || 8888;

connectDb()

const app = Express()

app.get("/", (req, res) =>{
    console.log("Hello from /")
    res.send("API running")
})

app.use("/api/facts", factRoutes)
app.use("/api/users", userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server running on  localhost:${port}`))