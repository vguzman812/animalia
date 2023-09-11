import Express from "express"
import 'dotenv/config'

const PORT = process.env.PORT || 5000;

const app = Express()

app.get("/", (req, res) =>{
    console.log("Hello from index")
    res.send("Hello world")
})

app.listen(PORT, ()=> console.log(`Server running on  localhost:${PORT}`))