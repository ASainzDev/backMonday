import mondaySdk from "monday-sdk-js";
import { Request, Response } from "express";
import Dotenv from "dotenv";
import util from "util";
import { MondayResponse } from "../interfaces/monday.interface";

Dotenv.config();

const monday = mondaySdk();

monday.setToken(process.env.APP_TOKEN || "");

export const functionTest = async (req: Request, res: Response) => {

    const query = `query{
  workspaces(ids: 5974062) {
    id
    name
  }
    boards (ids: 5094296373){
      id
      name
      type
    	groups{
        id
        title
        color
      }
      columns {
        id
        title
        type
        settings
      }
      items_page {
        cursor
        items {
          id
          name
          group {
            id
          }
          column_values {
            id
            text
            type
            value
          }
        }
      }
    }
  }
`;


    const response = await monday.api(query);

    const workspace: MondayResponse = response.data;
    
    if (!response || workspace.boards.length == 0 || workspace.workspaces.length == 0) {
        return res.status(400).json("No se han encontrado datos coincidentes con la consulta realizada");
    };

    console.log(workspace);

    return res.status(200).json(workspace);

}