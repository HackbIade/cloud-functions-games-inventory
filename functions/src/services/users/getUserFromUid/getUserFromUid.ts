import { firestore } from "firebase-admin";
import * as functions from "firebase-functions";

import { GetGameTagFromUidRequest, GetGameTagFromUidResponse } from "./types";

const db = firestore();

export const getUserFromUid = functions.https.onCall(
  async (request: GetGameTagFromUidRequest) => {
    try {
      const list: GetGameTagFromUidResponse[] = [];
      const snapshot = await db
        .collection("users")
        .where("uid", "==", request.uid)
        .limit(1)
        .get();

      snapshot.forEach((doc) => {
        list.push({ gameTag: doc.id });
      });

      return list[0];
    } catch (error) {
      throw new functions.https.HttpsError(
        "aborted",
        "It wasn't possible to get the user"
      );
    }
  }
);
