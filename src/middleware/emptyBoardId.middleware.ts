import {Request, Response, NextFunction} from "express";

export const emptyBoardId = (req: Request, res: Response, next: NextFunction) => {
    
    const board_id = req.body.board_id;

    if(!board_id || typeof board_id !== 'string'){
        return res.status(400).json("Debe de incluir un valor para el boardId en el cuerpo de su petición.");
    }

    next();
}