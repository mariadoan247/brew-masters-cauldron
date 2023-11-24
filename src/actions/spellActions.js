import axios from "axios";

import { GET_ERRORS, SET_SPELLS } from "./types";

const api = axios.create();

const spellData = {
    collection: "spells",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchSpells = () => dispatch => {
    api
        .post("/action/fetchSpells", spellData)
        .then(res => {
            const fetchedSpells = res.data;
            dispatch({
                type: SET_SPELLS,
                payload: fetchedSpells
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

// Set spells
export const setSpells = spells => {
    return {
        type: SET_SPELLS,
        payload: spells
    };
};
