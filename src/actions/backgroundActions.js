import axios from "axios";

import { GET_ERRORS, SET_BACKGROUNDS } from "./types";

const api = axios.create();

const backgroundData = {
    collection: "backgrounds",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchBackgrounds = () => dispatch => {
    api
        .post("/action/fetchBackgrounds", backgroundData)
        .then(res => {
            const fetchedBackgrounds = res.data;
            dispatch({
                type: SET_BACKGROUNDS,
                payload: fetchedBackgrounds
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

// Set backgrounds
export const setBackgrounds = backgrounds => {
    return {
        type: SET_BACKGROUNDS,
        payload: backgrounds
    };
};
