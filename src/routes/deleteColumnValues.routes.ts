import { Router } from "express";
import { deleteColumnObjectValue, deleteSimpleColumnValue } from "../controllers/deleteColumns.controllers";

const deleteColumn = Router();

deleteColumn.post("/deletesimplecolumn", deleteSimpleColumnValue);

deleteColumn.post("/deleteobjectcolumn", deleteColumnObjectValue);

export default deleteColumn;