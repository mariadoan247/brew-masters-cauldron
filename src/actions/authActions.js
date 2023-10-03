import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Request-Headers': '*', 
        'api-key': 'p0OQjP17ejlY65NAGaytJpVEoIFeWhWa1ecUk6OfW4sEj9x6qDXhJ4IUodYjpS8B'
    },
});

const userData = {
    'name': '',
    'email': '',
    'password': ''
}

// Sign Up User
export const signUpUser = (userData, navigate) => dispatch => {
    console.log("userData:", userData); // Log the user data
    api
        .post("/5e-compendium/users/signup", userData)
        .then(res => {
            console.log(res.data);
            navigate("/signIn");
        })
        .catch(err => {
            console.error('Error:', err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
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