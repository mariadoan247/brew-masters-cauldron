const Validator = require("validator");
const isEmpty = require("is-empty");
const keys = require("../config/keys");

const axios = require("axios");

const apiKey = keys.apiKey;

async function getUserByEmail(email) {
  try {
    const response = await axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-iudir/endpoint/data/v1/action/findOne', {
      collection: "users",
      database: "5e-compendium",
      dataSource: "brewmasters-cauldron",
      filter: {
        email: email
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    });
    return response.data; // this will return the found user or null if not found
  } catch (error) {
      console.error("Error fetching user by email:", error);
      return null;
  }
}

module.exports = async function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  } else {
    const existingUser = await getUserByEmail(data.email);
    if (existingUser && existingUser.document) errors.email = "Email already exists";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};