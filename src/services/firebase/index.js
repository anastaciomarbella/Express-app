const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require("../../utils/constants/firebase-admin.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://aplicaciones-web-3d0e2.firebaseio.com"
});

module.exports = app;