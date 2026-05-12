import { Router } from 'express';
import { getBoardsOfAWorkspace } from '../controllers/boards.controller';
import { emptyBoardId } from '../middleware/emptyBoardId.middleware';

const boardRouter = Router();

boardRouter.post("/boards", getBoardsOfAWorkspace);

export default boardRouter;