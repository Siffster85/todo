import express from "express";
import listRouter from "./routes/list.router";
import itemRouter from "./routes/item.router";

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.use("/lists", listRouter)
app.use("/items", itemRouter)

app.get('/ping', (req, res) => {
    res.json({ message:'ping'}).status(200)
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})