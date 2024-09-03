import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Routers from "./routes/index";
import { conectarDB } from "./config/db";

dotenv.config();

const server = Express();


const port = process.env.PORT || 3000;

server.use(cors());
server.use(Express.json());
server.use("/api", Routers);

conectarDB();

server.listen(port, () => {
  console.log(`server rodando na porta:${port}`);
});
