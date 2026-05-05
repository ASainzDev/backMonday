import {Request, Response, NextFunction} from "express";

export const emptyFields = (req: Request, res: Response, next: NextFunction) => {

    const {board_id, group_id, item_name, column_values} = req.body;

    if(!board_id || !group_id || !item_name || !column_values ){
        return res.status(400).json("Bad Request. Campos insuficientes para realizar la petición");
    };

    if(typeof board_id !== 'number'){
        return res.status(400).json("El board_id proporcionado no está en formato numérico");
    };

    if(typeof group_id !== 'string' || typeof item_name !== 'string'){
        return res.status(400).json("Uno de los campos group_id o item_name no tiene el formato correcto. Deben de ser un String");
    };

    if(group_id.trim() === "" || item_name.trim() === ""){
        return res.status(400).json("Uno de los campos group_id o item_name tiene un valor vacio. Debe de proporcionar un valor para ambos campos");
    };

    if(column_values === null || column_values === undefined || typeof column_values !== 'object'){
        return res.status(400).json("El conjunto de campos column_values necesario no adjunta ningún valor. Revise la información proporcionada");
    };

    next();
}