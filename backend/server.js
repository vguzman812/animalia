import Express from "express"
import 'dotenv/config'
import sampleFacts from "./data/facts.js"
import connectDb from "./config/db.js";

const port = process.env.PORT || 8888;

connectDb()

const app = Express()

app.get("/", (req, res) =>{
    console.log("Hello from /")
    res.send("API running")
})

app.get("/api/facts", (req, res) => {
    console.log("hello from /api/facts")
    res.json(sampleFacts);
})

app.get("/api/facts/:id", (req, res) => {
    console.log("Hello from /facts/:id")
    const fact = sampleFacts.find((f) => f._id === Number(req.params.id))
    res.json(fact)
})
app.listen(port, ()=> console.log(`Server running on  localhost:${port}`))