import { firestore } from "firebase-admin";
import * as functions from "firebase-functions";
import { GetConsolesFromUserRequest } from "./types";
import { ConsolesType } from "../../types";

const db = firestore();

export const getConsolesFromUser = functions.https.onCall(
  async (request: GetConsolesFromUserRequest) => {
    try {
      const list: ConsolesType[] = [];
      const consoles = await db
        .collection("users")
        .doc(request.user)
        .collection("consoles")
        .orderBy("name")
        .get();

      consoles.forEach((console) => {
        list.push(console.data());
      });

      return list;
    } catch (error) {
      throw new functions.https.HttpsError(
        "aborted",
        "It wasn't possible to get the user consoles"
      );
    }
  }
);
