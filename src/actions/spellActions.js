import axios from "axios";

import { GET_ERRORS, SET_SPELLS, SET_SPELL_NAMES } from "./types";

const api = axios.create(); // Axios instance called api
api.defaults.baseURL = "/action";


const spellData = {
    collection: "spells",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

export const fetchSpells = () => dispatch => { // Action creator function
    api
        .post("/fetchSpells", spellData) // makes API call to /action/fetchSpells endpoint on server
        .then(res => {
            const fetchedSpells = res.data;
            dispatch({ // Upon successful response, dispatch SET_SPELLS action to update the Redux store with fetched spells
                type: SET_SPELLS,
                payload: fetchedSpells
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

export const getSpellNames = () => (dispatch) => {
    api
        .post("/getSpellNames", spellData)
        .then((res) => {
            const spellNames = res.data.spellNames;
            dispatch({
                type: SET_SPELL_NAMES,
                payload: spellNames,
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
