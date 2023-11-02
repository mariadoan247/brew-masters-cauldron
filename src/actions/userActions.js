import axios from "axios";

import { GET_ERRORS, SET_USER_NOTES } from "./types";

const api = axios.create();

const userData = {
    collection: "users",
    database: "5e-compendium",
    dataSource: "brewmasters-cauldron",
}

// update user description (Stretch goal)
export const updateUserDescription = (userEmail, userDescription) => dispatch => {
    userData.filter = userEmail;
    userData.update = {
        $set: userDescription
    };
    api
        .post("/action/updateUserDescription", userData)
        .then(res => {
            console.log(res.data);
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

export const createNewNote = (userEmail, updatedNotes) => dispatch => {
    userData.filter = userEmail;
    userData.update = {
        $set: { notes: updatedNotes }  // Update the notes array for this user in the database
    };

    api
        .post("/action/createNewNote", userData)
        .then(res => {
            console.log(res.data);
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

export const fetchUserNotes = (userEmail) => dispatch => {
    userData.filter = userEmail;
    
    api
        .post("/action/fetchUserNotes", userData)
        .then(res => {
            const fetchedNotes = res.data.notes;
            dispatch({
                type: SET_USER_NOTES,
                payload: fetchedNotes
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
