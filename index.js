require('dotenv').config()

const express = require("express");
const firebase = require("./firebase");

const app = express();

const port = process.env.PORT || 3000;
app.set("port", port);

app.listen(port, () => console.log(`App started on port ${port}.`));

app.get("/", async (req, res, next) => {
  res.set({ "Access-Control-Allow-Origin": "*" });

  let data;
  await firebase.db
    .collection("users")
    .where("id", "==", "2")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        data = doc.data();
        console.log(doc.id, "=>", doc.data());
      });
    })
    .catch((err) => {
      console.log("Error", err);
    });

  return res.send(data);
});
