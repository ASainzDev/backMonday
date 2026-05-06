import { Router } from "express";
import { deleteColumnObjectValue, deleteSimpleColumnValue } from "../controllers/deleteColumns.controllers";
import { emptyFieldsDeleteColumn } from "../middleware/emptyFieldsDeleteColumn.middleware";

const deleteColumn = Router();

deleteColumn.post("/deletesimplecolumn", emptyFieldsDeleteColumn, deleteSimpleColumnValue);

deleteColumn.post("/deleteobjectcolumn", emptyFieldsDeleteColumn, deleteColumnObjectValue);

export default deleteColumn;