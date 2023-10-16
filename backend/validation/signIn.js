const Validator = require("validator");
const isEmpty = require("is-empty");
const bcrypt = require("bcryptjs");
const { getUserByEmail } = require("./getUserByEmail");

module.exports = async function validateLoginInput(data) {
  let errors = {};
  let user = null;

  // Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  } else {
    const existingUser = await getUserByEmail(data.email);
    if (!(existingUser && existingUser.document)) {
      errors.email = "Email is not registered";
    } else {
      // Check password
      const isMatch = await bcrypt.compare(data.password, existingUser.document.password);
      if (!isMatch) {
        errors.password = "Password incorrect";
      } else {
        user = existingUser; // If the password is correct, set the user object
      }
    }
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
    user: user  
  };
};
