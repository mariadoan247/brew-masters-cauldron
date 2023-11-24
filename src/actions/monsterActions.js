import axios from "axios";

import { GET_ERRORS, SET_MONSTERS } from "./types";

const api = axios.create();

const monsterData = {
    collection: "monsters",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchMonsters = () => dispatch => {
    api
        .post("/action/fetchMonsters", monsterData)
        .then(res => {
            const fetchedMonsters = res.data;
            dispatch({
                type: SET_MONSTERS,
                payload: fetchedMonsters
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

// Set monsters
export const setMonsters = monsters => {
    return {
        type: SET_MONSTERS,
        payload: monsters
    };
};
