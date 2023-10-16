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
exports.getUserByEmail = getUserByEmail;
