import firebase from "firebase/app";
import { db } from "../firebase";

export const subscribe_async = async ({ user_id, subscriber_id }) => {
  const user_ref = db.doc(`investors/${user_id}`);
  const subscriber_ref = db.doc(
    `investors/${user_id}/subscribers/${subscriber_id}`
  );
  let value = 0;

  try {
    await subscriber_ref.get().then((doc) => {
      if (!doc.exists) {
        // adding vote
        subscriber_ref.set({
          date: new Date(),
        });

        value = 1;
      } else {
        // deleting vote
        subscriber_ref.delete();
        value = -1;
      }
    });

    await user_ref.update({
      subscribers: firebase.firestore.FieldValue.increment(value),
    });

    const response = await user_ref.get().then((doc) => [doc.data(), doc.id]);
    return response[0].subscribers;
  } catch (error) {
    return error;
  }
};
