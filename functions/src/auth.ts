import functions = require("firebase-functions");

exports.register = functions.https.onRequest((request, response) => {
  response.json({
    success: true,
    token: "TOKEN_HERE",
  });
});
