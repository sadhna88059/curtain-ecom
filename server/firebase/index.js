var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sadhna-8fcf7-default-rtdb.firebaseio.com",
});

module.exports = admin;
