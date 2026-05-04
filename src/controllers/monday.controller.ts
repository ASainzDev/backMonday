import mondaySdk from "monday-sdk-js";
import { Request, Response } from "express";
import Dotenv from "dotenv";
import util from "util";
import { Workspace, Column, Board, ColumnSettings, ColumnValue, ItemsPage, Item, StatusLabel } from "../interfaces/monday.interface";

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

    const workspace: Workspace = response.data;
    
    if (!response || workspace.boards.length == 0) {
        return res.status(400).json("No se han encontrado datos coincidentes con la consulta realizada");
    };

    if(workspace.boards.length > 0){
      workspace.boards[0].columns.forEach(group =>{
        console.log(group);
      });
    }

    return res.status(200).json(workspace);

}