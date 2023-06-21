import { ConsolesType } from "../../types";

export type AddConsolesToUserRequestType = {
  user: string;
  userCode: string;
  consoles: ConsolesType[];
};
