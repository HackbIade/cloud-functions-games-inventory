import { GamesType } from "../../../types";

export type AddGamesToUserRequestType = {
  user: string;
  userCode: string;
  games: GamesType[];
};
