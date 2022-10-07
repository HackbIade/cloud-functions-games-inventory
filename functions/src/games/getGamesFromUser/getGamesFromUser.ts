import { firestore } from "firebase-admin";
import * as functions from "firebase-functions";

import { GamesType } from "../../types";
import { GetGamesFromUserRequest } from "./types";

const db = firestore();

export const getGamesFromUser = functions.https.onCall(
  async (request: GetGamesFromUserRequest) => {
    try {
      const list: GamesType[] = [];
      const games = await db
        .collection("users")
        .doc(request.user)
        .collection("games")
        .get();

      games.forEach((game) => {
        list.push(game.data());
      });

      return list;
    } catch (error) {
      throw new functions.https.HttpsError(
        "aborted",
        "It wasn't possible to get the user games"
      );
    }
  }
);
