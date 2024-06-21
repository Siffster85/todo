import express from "express";
import listRouter from "./routes/list.router";
import itemRouter from "./routes/item.router";
const cors = require("cors")

const app = express()
const port = 12345

app.use(cors())
app.use(express.json())

app.use("/lists", listRouter)
app.use("/items", itemRouter)

app.get('/ping', (req, res) => {
    res.json({ message:'ping'}).status(200)
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})