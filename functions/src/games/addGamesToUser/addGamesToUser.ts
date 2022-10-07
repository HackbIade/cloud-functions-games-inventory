import { firestore } from "firebase-admin";
import * as functions from "firebase-functions";
import { STATUS_NAMES } from "../../constants/status";

import { UsersTypes } from "../../types";
import { AddGamesToUserRequestType } from "./types";

const db = firestore();

export const addGamesToUser = functions.https.onCall(
  async (request: AddGamesToUserRequestType) => {
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
      request?.games.forEach((game) => {
        creationPromise.push(
          db
            .collection("users")
            .doc(request.user)
            .collection("games")
            .doc()
            .set({
              ...game,
              digitalVersion: !!game?.digitalVersion,
              status: game?.status || STATUS_NAMES.BACKLOG,
              addedToCollection:
                game?.addedToCollection || new Date().toString(),
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
        error.message || "It wasn't possible to add the game"
      );
    }
  }
);
