import axios from "axios";

import { GET_ERRORS, SET_RACES } from "./types";

const api = axios.create();

const raceData = {
    collection: "races",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchRaces = () => dispatch => {
    api
        .post("/action/fetchRaces", raceData)
        .then(res => {
            const fetchedRaces = res.data;
            dispatch({
                type: SET_RACES,
                payload: fetchedRaces
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

// Set races
export const setRaces = races => {
    return {
        type: SET_RACES,
        payload: races
    };
};
