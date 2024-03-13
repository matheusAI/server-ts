import express from "express"
import routes from "./routers/Router"

const app = express()

const port = process.env.port || "3341"

app.use(routes)

app.listen(port , () => {
    console.log("server rodando...")
})