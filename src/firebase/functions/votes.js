import firebase from "firebase/app";
import { db } from "../firebase";

export const votes_async = async ({ doc_path, doc_votes_path }) => {
  const doc_ref = db.doc(doc_path);
  const doc_votes_ref = db.doc(doc_votes_path);

  let value = 0;

  try {
    await doc_votes_ref.get().then((doc) => {
      if (!doc.exists) {
        // adding vote
        doc_votes_ref.set({
          date: new Date(),
        });

        value = 1;
      } else {
        // deleting vote
        doc_votes_ref.delete();
        value = -1;
      }
    });

    await doc_ref.update({
      votes: firebase.firestore.FieldValue.increment(value),
    });

    const response = await doc_ref.get().then((doc) => [doc.data(), doc.id]);
    return response;
  } catch (error) {
    return error;
  }
};
