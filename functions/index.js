const functions = require("firebase-functions");
const { db, admin } = require("./admin");

exports.addNewProjectToOrder = functions.firestore
  .document("projects/{projectId}")
  .onCreate(snapshot => {
    let ref = db.collection("projects").doc("--STATS--");
    return;
    ref
      .get()
      .then(doc => {
        let array = doc.data().order;
        array.unshift(snapshot.id);

        ref.set({ order: array });
      })
      .catch(err => {
        console.error(err);
        return;
      });

    //   return db
    //     .collection("projects")
    //     .doc("--STATS--")
    //     .update({
    //       order: admin.firestore.FieldValue.arrayUnion(snapshot.id)
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       return;
    //     });
    // });
  });
