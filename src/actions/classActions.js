import axios from "axios";

import { GET_ERRORS, SET_CLASSES } from "./types";

const api = axios.create();

const classData = {
    collection: "classes",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchClasses = () => dispatch => {
    api
        .post("/action/fetchClasses", classData)
        .then(res => {
            const fetchedClasses = res.data;
            dispatch({
                type: SET_CLASSES,
                payload: fetchedClasses
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

// Set classes
export const setClasses = classes => {
    return {
        type: SET_CLASSES,
        payload: classes
    };
};
