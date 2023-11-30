import axios from "axios";

import { GET_ERRORS, SET_FEATS, SET_FEAT_NAMES } from "./types";

const api = axios.create(); // Axios instance called api
api.defaults.baseURL = "/action";


const featData = {
    collection: "feats",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchFeats = () => dispatch => { // Action creator function
    api
        .post("/fetchFeats", featData) // makes API call to /action/fetchFeats endpoint on server
        .then(res => {
            const fetchedFeats = res.data;
            dispatch({ // Upon successful response, dispatch SET_FEATS action to update the Redux store with fetched feats
                type: SET_FEATS,
                payload: fetchedFeats
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

export const getFeatNames = () => (dispatch) => {
    api
        .post("/getFeatNames", featData)
        .then((res) => {
            const featNames = res.data.featNames;
            dispatch({
                type: SET_FEAT_NAMES,
                payload: featNames,
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
