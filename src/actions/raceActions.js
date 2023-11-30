import axios from "axios";

import { GET_ERRORS, SET_RACES, SET_RACE_NAMES } from "./types";

const api = axios.create(); // Axios instance called api

const raceData = {
    collection: "races",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchRaces = () => dispatch => { // Action creator function
    api
        .post("/action/fetchRaces", raceData) // makes API call to /action/fetchRaces endpoint on server
        .then(res => {
            const fetchedRaces = res.data;
            dispatch({ // Upon successful response, dispatch SET_RACES action to update the Redux store with fetched races
                type: SET_RACES,
                payload: fetchedRaces
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

export const getRaceNames = () => (dispatch) => {
    api
        .post("/action/getRaceNames", raceData)
        .then((res) => {
            const raceNames = res.data.raceNames;
            dispatch({
                type: SET_RACE_NAMES,
                payload: raceNames,
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
