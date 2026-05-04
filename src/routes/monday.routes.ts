import {Router} from "express";
import { functionTest } from "../controllers/monday.controller";

const routerMonday = Router();

routerMonday.post("/handshake", functionTest);

export default routerMonday;