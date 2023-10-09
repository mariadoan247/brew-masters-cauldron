import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

const api = axios.create({
    baseURL: '/app/data-iudir/endpoint/data/v1',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'api-key': '<API-KEY>' // insert API key here
    },
});

const userData = {
    "collection": "users",
    "database": "5e-compendium",
    "dataSource": "brewmasters-cauldron",
    "document": {
        'name': '',
        'email': '',
        'password': ''
    }
}

// Sign Up User
export const signUpUser = (newUser, navigate) => dispatch => {
    userData.document = newUser;
    console.log("userData:", userData);
    api
        .post("/action/insertOne", userData)
        .then(res => {
            console.log(res.data);
            navigate("/signIn");
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

// Sign in - get user token
export const signInUser = userData => dispatch => {
    api
        .post("/5e-compendium/users/signin", userData)
        .then(res => {
        // Save to localStorage

        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Sign user out
export const signOutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};