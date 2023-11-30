import axios from "axios";

import { GET_ERRORS, SET_BACKGROUNDS, SET_BACKGROUND_NAMES } from "./types";

const api = axios.create(); // Axios instance called api
api.defaults.baseURL = "/action";


const backgroundData = {
    collection: "backgrounds",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchBackgrounds = () => dispatch => { // Action creator function
    api
        .post("/fetchBackgrounds", backgroundData) // makes API call to /action/fetchBackgrounds endpoint on server
        .then(res => {
            const fetchedBackgrounds = res.data;
            dispatch({ // Upon successful response, dispatch SET_BACKGROUNDS action to update the Redux store with fetched backgrounds
                type: SET_BACKGROUNDS,
                payload: fetchedBackgrounds
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

export const getBackgroundNames = () => (dispatch) => {
    api
        .post("/getBackgroundNames", backgroundData)
        .then((res) => {
            const backgroundNames = res.data.backgroundNames;
            dispatch({
                type: SET_BACKGROUND_NAMES,
                payload: backgroundNames,
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
