import Express from "express";
import dotenv from "dotenv";

dotenv.config()

const serve = Express();

const port = process.env.PORT || 3000

serve.get("/",(req , res)=> {
    res.send("ola mundo")
})

serve.listen(port, ()=> {
    console.log(`server rodando na porta:${port}`)
})