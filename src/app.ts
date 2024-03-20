import express from "express"
import routes from "./routers/Router"
import { json } from "stream/consumers"

const app = express()

const port = process.env.port || "3341"

app.use(express.json()),
app.use(routes),

app.listen(port , () => {
    console.log("server rodando...")
})