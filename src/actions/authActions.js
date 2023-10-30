import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

const api = axios.create();

const userData = {
    "collection": "users",
    "database": "5e-compendium",
    "dataSource": "brewmasters-cauldron",
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
export const signInUser = (userSignIn, navigate) => dispatch => {
    userData.filter = userSignIn;
    console.log("userData:", userData);
    api
        .post("/action/findOne", userData)
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
            
            // Redirect to account page
            navigate("/userAccount");
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

// Check to see if the user is authenticated
export const isUserAuthenticated = () => {
    const token = localStorage.getItem("jwtToken");
  
    if (!token) return false; // If there's no token, the user is not authenticated
  
    try {
      const decoded = jwt_decode(token);
  
      // Check if token is expired
      const currentTime = Date.now() / 1000;
      if (decoded.exp && decoded.exp < currentTime) {
        // Token is expired
        return false;
      }
      return true; // Token exists and is not expired, user is authenticated
    } catch (err) {
      return false; // If there's an error decoding, treat as not authenticated
    }
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