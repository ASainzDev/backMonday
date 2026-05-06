
// Eliminar el valor de una columna de formato simple
export const deleteSimpleColumn = () => {
    const mutation = `mutation($item_id: ID!, $board_id: ID!, $column_id: String!){
        change_simple_column_value(item_id: $item_id, board_id: $board_id, column_id: $column_id, value: ""){
            id
        }
    }`;

    return mutation;
}

// Eliminar el valor de una columna de formato Objeto
export const deleteMutationObject = () => {
    const mutation = `mutation($item_id: ID!, $board_id: ID!, $column_id: String!){
        change_column_value(item_id: $item_id, board_id: $board_id, column_id: $column_id, value: "{}"){
            id
        }
    }`;

    return mutation;
};