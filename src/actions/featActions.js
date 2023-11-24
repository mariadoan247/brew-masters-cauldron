import axios from "axios";

import { GET_ERRORS, SET_FEATS } from "./types";

const api = axios.create();

const featData = {
    collection: "feats",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchFeats = () => dispatch => {
    api
        .post("/action/fetchFeats", featData)
        .then(res => {
            const fetchedFeats = res.data;
            dispatch({
                type: SET_FEATS,
                payload: fetchedFeats
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

// Set feats
export const setFeats = feats => {
    return { 
        type: SET_FEATS,
        payload: feats
    };
};
