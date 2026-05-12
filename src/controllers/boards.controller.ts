import { Request, Response} from 'express';
import mondaySdk from 'monday-sdk-js';
import { boardsOfAWorkspace } from '../services/workspacesQuery.service';
import Dotenv from 'dotenv';

Dotenv.config();

const monday = mondaySdk();

monday.setToken(process.env.APP_TOKEN || '');

export const getBoardsOfAWorkspace = async (req: Request, res: Response) => {

    const workspace_ids = Number(req.body.workspace_ids);

    const query = boardsOfAWorkspace(workspace_ids);

    try{

        const data = await monday.api(query);

        console.log(data);

        const boards = data.data.boards;

        console.log(boards);

        if(!boards){
            return res.status(200).json("Petición correcta, pero no se ha encontrado ningún resultado");
        }

        return res.status(200).json(boards);

    }catch(error){
        res.status(500).json("Ha ocurrido un error al hacer la transaccion " + JSON.stringify(error));
    }
}