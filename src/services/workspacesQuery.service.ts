import Dotenv from "dotenv";

export const allWorkspacesQuery = () => {

    const query = `query{
        workspaces {
            id
            name
            is_default_workspace
        }
    }`;

    return query;
}

export const boardsOfAWorkspace = (workspace_ids: number) => {

    const query = `query{
            boards(workspace_ids: ${workspace_ids}){
                id
                name
                type
                groups {
                    id
                    title
                    color
                        }
                    }
                }`;

    return query;
}