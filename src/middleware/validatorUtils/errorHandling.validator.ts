import {validationResult} from 'express-validator';
import {Request, Response, NextFunction} from 'express';

export const validation = (req: Request, res: Response, next: NextFunction) => {
    const results = validationResult(req);

    if(!results.isEmpty()){
        return res.status(400).json(results.array());
    }

    next();
}