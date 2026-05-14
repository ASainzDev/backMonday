import { Request, Response} from 'express';
import mondaySdk from 'monday-sdk-js';
import { boardContent, boardsOfAWorkspace } from '../services/workspacesQuery.service';
import Dotenv from 'dotenv';

Dotenv.config();

const monday = mondaySdk();

monday.setToken(process.env.APP_TOKEN || '');

export const getBoardsOfAWorkspace = async (req: Request, res: Response) => {

    const workspace_ids = Number(req.body.workspace_ids);

    const query = boardsOfAWorkspace(workspace_ids);

    try{

        const data = await monday.api(query);

        const boards = data.data.boards;

        if(!boards){
            return res.status(200).json("Petición correcta, pero no se ha encontrado ningún resultado");
        }

        return res.status(200).json(boards);

    }catch(error){
        return res.status(500).json("Ha ocurrido un error al hacer la transaccion " + JSON.stringify(error));
    }
}

export const getBoardContent = async (req: Request, res: Response) => {

    const board_id = req.body.board_id;

    const query = boardContent(board_id);

    try{

        const data = await monday.api(query);

        if(!data){
            return res.status(200).json("Petición Correcta. No se han encontrado datos del elemento buscado");
        };

        const boardData = data.data.boards;

        return res.status(200).json(boardData);

    }catch(error){
        return res.status(500).json("Ha ocurrido un error al realizar la petición " + error);
    }
}