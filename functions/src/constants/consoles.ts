export enum CONSOLES_NAMES_NINETH_GENERATION {
  PLAYSTATION_5 = "PlayStation 5",
  XBOX_SERIES_X = "Xbox Series X",
  XBOX_SERIES_S = "Xbox Series S",
}

export enum CONSOLES_NAMES_EIGHT_GENERATION {
  WII_U = "Wii U",
  XBOX_ONE = "Xbox One",
  NINTENDO_3DS = "Nintendo 3DS",
  PLAYSTATION_4 = "PlayStation 4",
  NINTENDO_SWITHC = "Nintendo Switch",
  PLAYSTATION_VITA = "PlayStation Vita",
}

export enum CONSOLES_NAMES_SEVENTH_GENERATION {
  WII = "Wii",
  XBOX_360 = "Xbox 360",
  NINTENDO_DS = "Nintendo DS",
  PLAYSTATION_3 = "PlayStation 3",
  PLAYSTATION_PORTABLE = "PlayStation Portable",
}

export const CONSOLES_NAMES = {
  ...CONSOLES_NAMES_EIGHT_GENERATION,
  ...CONSOLES_NAMES_NINETH_GENERATION,
  ...CONSOLES_NAMES_SEVENTH_GENERATION,
};
