import axios from "axios";

import { GET_ERRORS, SET_MONSTERS, SET_MONSTER_NAMES } from "./types";

const api = axios.create(); // Axios instance called api
api.defaults.baseURL = "/action";


const monsterData = {
    collection: "monsters",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchMonsters = () => dispatch => { // Action creator function
    api
        .post("/fetchMonsters", monsterData) // makes API call to /action/fetchMonsters endpoint on server
        .then(res => {
            const fetchedMonsters = res.data;
            dispatch({ // Upon successful response, dispatch SET_MONSTERS action to update the Redux store with fetched monsters
                type: SET_MONSTERS,
                payload: fetchedMonsters
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

export const getMonsterNames = () => (dispatch) => {
    api
        .post("/getMonsterNames", monsterData)
        .then((res) => {
            const monsterNames = res.data.monsterNames;
            dispatch({
                type: SET_MONSTER_NAMES,
                payload: monsterNames,
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
