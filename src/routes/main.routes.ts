import {Router} from "express";
import { getAllWorkspaces} from "../controllers/main.controller";

const mainRouter = Router();

mainRouter.post("/workspaces", getAllWorkspaces);

export default mainRouter;