import axios from "axios";

import { GET_ERRORS, SET_ITEMS } from "./types";

const api = axios.create();

const itemData = {
    collection: "items",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchItems = () => dispatch => {
    api
        .post("/action/fetchItems", itemData)
        .then(res => {
            const fetchedItems = res.data;
            dispatch({
                type: SET_ITEMS,
                payload: fetchedItems
            });
        })
        .catch(err => {
            console.error('Error:', err);
            // More robust error handling
            let errorData = {};
            if (err.response) {
                errorData = err.response.data;
            } else if (err.request) {
                errorData = { message: "No response received from server." };
            } else {
                errorData = { message: err.message };
            }
            dispatch({
                type: GET_ERRORS,
                payload: errorData
            })
        });
};

// Set items
export const setItems = items => {
    return {
        type: SET_ITEMS,
        payload: items
    };
};
