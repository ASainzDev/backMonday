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

export const boardContent = (board_ids: number) => {
    const query = `query{
                        boards(ids: ${board_ids}) {
                            groups {
                            id
                            items_page {
                                cursor
                                items {
                                id
                                column_values {
                                    id
                                    text
                                    type
                                    value
                                }
                                }
                            }
                            }
                            columns {
                            id
                            type
                            title
                            settings
                            }
                    }
                }`;

        return query;
}