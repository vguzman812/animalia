import Express from "express"
import 'dotenv/config'
import connectDb from "./config/db.js";
import factsRoutes from "./routes/factsRoutes.js"

const port = process.env.PORT || 8888;

connectDb()

const app = Express()

app.get("/", (req, res) =>{
    console.log("Hello from /")
    res.send("API running")
})

app.use("/api/facts", factsRoutes)

app.listen(port, ()=> console.log(`Server running on  localhost:${port}`))