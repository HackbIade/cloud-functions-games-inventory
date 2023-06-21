/* eslint-disable @typescript-eslint/no-explicit-any */
import { firestore } from "firebase-admin";
import * as functions from "firebase-functions";

import { UsersTypes } from "../../types";
import { AddConsolesToUserRequestType } from "./types";

const db = firestore();

export const addConsolesToUser = functions.https.onCall(
  async (request: AddConsolesToUserRequestType) => {
    try {
      const user = await db.collection("users").doc(request.user).get();
      const { userCode } = user.data() as UsersTypes;

      if (userCode !== request.userCode) {
        throw new functions.https.HttpsError(
          "permission-denied",
          "You don't have enought permissions"
        );
      }

      const creationPromise: Promise<any>[] = [];
      request?.consoles.forEach((console) => {
        creationPromise.push(
          db
            .collection("consoles")
            .doc(request.user)
            .collection("consoles")
            .doc()
            .set({
              ...console,
              addedToCollection:
                console?.addedToCollection || new Date().toString(),
            })
        );
      });

      await Promise.all(creationPromise);

      return {
        status: "success",
        message: "Added",
      };
    } catch (error: any) {
      throw new functions.https.HttpsError(
        error.code || "aborted",
        error.message || "It wasn't possible to add the consoles"
      );
    }
  }
);
