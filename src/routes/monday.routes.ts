import {Router} from "express";
import { createItemFunction, functionTest } from "../controllers/monday.controller";
import { emptyBoardId } from "../middleware/emptyBoardId.middleware";
import { emptyFields } from "../middleware/emptyFields.middleware";

const routerMonday = Router();

routerMonday.post("/handshake", emptyBoardId, functionTest);

routerMonday.post("/createItem", emptyFields, createItemFunction);

export default routerMonday;