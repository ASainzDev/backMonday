import { Router } from 'express';
import { getBoardContent, getBoardsOfAWorkspace } from '../controllers/boards.controller';
import { emptyBoardId } from '../middleware/emptyBoardId.middleware';
import {body} from "express-validator";
import {validation} from '../middleware/validatorUtils/errorHandling.validator';

const boardRouter = Router();

boardRouter.post("/boards", body('workspace_ids').notEmpty().trim().isNumeric(), validation, getBoardsOfAWorkspace);

boardRouter.post("/boardData", body('board_id').notEmpty().trim().isNumeric(), validation,  getBoardContent);

export default boardRouter;