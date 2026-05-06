import Dotenv from "dotenv";
import express from "express";
import routerMonday from "./routes/monday.routes";
import deleteColumn from "./routes/deleteColumnValues.routes";
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use("/monday", routerMonday);

app.use("/monday", deleteColumn);

app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));