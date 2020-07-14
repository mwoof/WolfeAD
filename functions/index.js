const functions = require("firebase-functions");
const { db, admin } = require("./admin");

exports.addNewProjectToOrder = functions.firestore
  .document("projects/{projectId}")
  .onCreate(snapshot => {
    return db
      .collection("projects")
      .doc("--STATS--")
      .update({
        order: admin.firestore.FieldValue.arrayUnion(snapshot.id)
      })
      .catch(err => {
        console.error(err);
        return;
      });
  });
