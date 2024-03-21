import express from "express";
import routes from "./routers/Router";
import cors from "cors";

const app = express();

const port = process.env.port || "3341";

const corsOptions = {
  credentials: true,
  origin: "*", // Altere para a origem correta do seu frontend
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
});
