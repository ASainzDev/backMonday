import Dotenv from "dotenv";

Dotenv.config();

export const createInitialQuery = ((boardId: string) => {

    return  `query{
  workspaces(ids: ${process.env.WORKSPACE_ID || ''}) {
    id
    name
  }
    boards (ids: ${boardId}){
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
});

export const createItemMutation = () => {

    const mutation = `mutation crear_objeto($board_id: ID!, $group_id: String!, $item_name: String!, $column_values: JSON!){
        create_item(board_id: $board_id, group_id: $group_id, item_name: $item_name, column_values: $column_values){
            id
        }
    }`;

    return mutation;

};