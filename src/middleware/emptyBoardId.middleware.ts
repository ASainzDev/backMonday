import {Request, Response, NextFunction} from "express";

export const emptyBoardId = (req: Request, res: Response, next: NextFunction) => {
    
    const boardId = req.body.board_id;

    if(!boardId || typeof boardId !== 'number'){
        return res.status(400).json("Debe de incluir un valor para el boardId en el cuerpo de su petición.");
    }

    next();
}