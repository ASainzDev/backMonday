import {Request, Response, NextFunction} from "express";

export const emptyFieldsDeleteColumn = (req: Request, res: Response, next: NextFunction) => {

    const {item_id, board_id, column_id} = req.body;

    if(!req.body){
        return res.status(400).json("Bad Request. Debe de acompañar una serie de datos con esta peticion");
    }

    if(!item_id || !board_id || !column_id){
        return res.status(400).json("Debe de adjuntar todos los campos necesarios para identificar la columna que se quiere borrar");
    }

    if(typeof item_id !== 'number' || typeof board_id !== 'number'){
        return res.status(400).json("Los campos item_id y board_id son campos numéricos. Debe de proporcionarlos en ese formato");
    }

    if(typeof column_id !== 'string'){
        return res.status(400).json("El campo column_id debe de tener un formato de string para poder ser procesado correctamente");
    }

    next();
}