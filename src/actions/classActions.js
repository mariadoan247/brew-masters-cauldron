import axios from "axios";

import { GET_ERRORS, SET_CLASSES, SET_CLASS_NAMES } from "./types";

const api = axios.create(); // Axios instance called api
api.defaults.baseURL = "/action";


const classData = {
    collection: "classes",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchClasses = () => dispatch => { // Action creator function
    api
        .post("/fetchClasses", classData) // makes API call to /action/fetchClasses endpoint on server
        .then(res => {
            const fetchedClasses = res.data;
            dispatch({ // Upon successful response, dispatch SET_CLASSES action to update the Redux store with fetched classes
                type: SET_CLASSES,
                payload: fetchedClasses
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

export const getClassNames = () => (dispatch) => {
    api
        .post("/getClassNames", classData)
        .then((res) => {
            const classNames = res.data.classNames;
            dispatch({
                type: SET_CLASS_NAMES,
                payload: classNames,
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
