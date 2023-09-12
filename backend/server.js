import Express from "express"
import 'dotenv/config'
import sampleFacts from "./data/sample.js"
import connectDb from "./config/db.js";

const port = process.env.PORT || 8888;

connectDb()

const app = Express()

app.get("/", (req, res) =>{
    console.log("Hello from index")
    res.send("API running")
})

app.get("/api/facts", (req, res) => {
    console.log("hello from get facts")
    res.json(sampleFacts);
})

app.get("/api/facts/:id", (req, res) => {
    console.log("Hello from one fact")
    const fact = sampleFacts.find((f) => f._id === Number(req.params.id))
    res.json(fact)
})
app.listen(port, ()=> console.log(`Server running on  localhost:${port}`))