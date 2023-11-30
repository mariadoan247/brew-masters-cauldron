import axios from "axios";

import { GET_ERRORS, SET_ITEMS, SET_ITEM_NAMES } from "./types";

const api = axios.create(); // Axios instance called api
api.defaults.baseURL = "/action";


const itemData = {
    collection: "items",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchItems = () => dispatch => { // Action creator function
    api
        .post("/fetchItems", itemData) // makes API call to /action/fetchItems endpoint on server
        .then(res => {
            const fetchedItems = res.data;
            dispatch({ // Upon successful response, dispatch SET_ITEMS action to update the Redux store with fetched items
                type: SET_ITEMS,
                payload: fetchedItems
            });
        })
        .catch(err => { // Upon error, print error log
            console.error('Error:', err);
            // More robust error handling
            let errorData = {};
            if (err.response) { // If response exists and has error
                errorData = err.response.data;
            } else if (err.request) { // If response does not exist
                errorData = { message: "No response received from server." };
            } else { // If any other error occurs
                errorData = { message: err.message };
            }
            dispatch({// Dispatch SET_ERRORS action to update the Redux store with errors
                type: GET_ERRORS,
                payload: errorData
            })
        });
};

export const getItemNames = () => (dispatch) => {
    api
        .post("/getItemNames", itemData)
        .then((res) => {
            const itemNames = res.data.itemNames;
            dispatch({
                type: SET_ITEM_NAMES,
                payload: itemNames,
            });
        })
        .catch((err) => {
            console.error("Error:", err);
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
                payload: errorData,
            });
        });
};
