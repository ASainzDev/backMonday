import Dotenv from "dotenv";
import express from "express";
import routerMonday from "./routes/monday.routes";

const app = express();

app.use(express.json());

app.use("/monday", routerMonday);

app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));