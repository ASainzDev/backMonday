import {Request, Response} from "express";
import mondaySdk from "monday-sdk-js";
import Dotenv from "dotenv";
import { deleteSimpleColumn, deleteMutationObject } from "../services/deleteColumnValues.service";

Dotenv.config();

const monday = mondaySdk();

monday.setToken(process.env.APP_TOKEN || "");

export const deleteSimpleColumnValue = async (req: Request, res: Response) => {

    const {board_id, item_id, column_id} = req.body;

    const variables = {
        item_id : item_id,
        board_id : board_id,
        column_id : column_id
    };

    try{

        const mutation = deleteSimpleColumn();

        const response = await monday.api(mutation, {variables});

        if(!response){
            return res.status(400).json("No existe el elemento que cumpla con los datos que se han enviado");
        };

        return res.status(200).json("Operacion realizada con éxito " + response);
    }catch(error){

        return res.status(500).json("Se ha producido un error critico durante la operación actual. Intentelo de nuevo más tarde.")
    }

}

export const deleteColumnObjectValue = async (req: Request, res: Response) => {

    const {board_id, item_id, column_id} = req.body;

    const mutation = deleteMutationObject();

    const variables = {
        item_id: item_id,
        board_id: board_id,
        column_id: column_id
    };

    try{

        const response = await monday.api(mutation, {variables});

        if(!response){
            return res.status(400).json("No se ha podido encontrar un elemento con los parámetros indicados");
        };

        res.status(200).json("Operación realizada con éxito " + response.account_id);
    }catch(error){

        res.status(500).json("Se ha producido un error crítico durante la operación. Intentelo más tarde");
    }

}