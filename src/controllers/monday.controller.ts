import mondaySdk from "monday-sdk-js";
import { Request, Response } from "express";
import Dotenv from "dotenv";
import util from "util";
import { MondayResponse } from "../interfaces/monday.interface";
import { createInitialQuery, createItemMutation } from "../services/mainboardquery.service";

Dotenv.config();

const monday = mondaySdk();

monday.setToken(process.env.APP_TOKEN || "");

export const functionTest = async (req: Request, res: Response) => {

  const boardId = req.body; //Aquí debería de venir, de saberse, el id del board a buscar.

    const query = createInitialQuery(boardId);


    const response = await monday.api(query);

    const workspace: MondayResponse = response.data;
    
    if (!response || workspace.boards.length == 0 || workspace.workspaces.length == 0) {
        return res.status(400).json("No se han encontrado datos coincidentes con la consulta realizada");
    };

    console.log(workspace);

    return res.status(200).json(workspace);

}

export const createItemFunction = async (req: Request, res: Response) => {

  const {board_id, group_id, item_name} = req.body;

    const column_values = JSON.stringify(req.body.column_values);

  const mutation = createItemMutation();

  const variables = {
    board_id: board_id,
    group_id: group_id,
    item_name: item_name,
    column_values: column_values
  }

  try{
    const response = await monday.api(mutation, {variables});

    if(!response){
      return res.status(400).json("No se ha podido crear el item indicado");
    }

    res.status(201).json(response);
  }catch (error){
      return res.status(500).json("Ha ocurrido un error inesperado a la hora de crear el item indicado.")
  }

}