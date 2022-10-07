export type GameType = {
  addedToCollection?: Date;
  completionDate?: Date;
  cover?: string;
  digitalVersion?: boolean;
  name?: string;
  platform?: string;
  publisher?: string;
  startedPlayingDate?: Date;
  status?: string;
  tags?: string[];
};

export type ExtendedGameType = GameType & {
  id: string;
};

export type Request = {
  body: GameType;
  params: { entryId: string };
};
