const admin = require("firebase-admin");
const functions = require("firebase-functions");
const ServiceAccount = require("./ServiceAccount.json");

admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });

const db = admin.firestore();

module.exports = {
  db: db,
};
