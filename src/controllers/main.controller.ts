import { Request, Response } from "express";
import mondaySdk from "monday-sdk-js";
import {allWorkspacesQuery} from "../services/workspacesQuery.service";

const monday = mondaySdk();

monday.setToken(process.env.APP_TOKEN || "");

export const getAllWorkspaces = async (req: Request, res: Response) => {

    const query = allWorkspacesQuery();

    try{

        const data = await monday.api(query);

        if(!data){
            return res.status(200).json("La query es correcta pero no ha devuelto resultados");
        };
        const workspaces = data.data.workspaces;

        res.status(200).json(workspaces);
    }catch(error){
        res.status(500).json("Ha habido algún error " + JSON.stringify(error));
    }
}
