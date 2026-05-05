import {Router} from "express";
import { createItemFunction, functionTest } from "../controllers/monday.controller";

const routerMonday = Router();

routerMonday.post("/handshake", functionTest);

routerMonday.post("/createItem", createItemFunction);

export default routerMonday;