export interface ConsolesType {
  name?: string;
  icon?: string;
  type?: string;
  version?: string;
  developer?: string;
  generation?: string;
  releaseYear?: number;
  addedToCollection?: Date;
  technicalSpecs?: ConsolesTechnicalSpecsType;
}

export interface ConsolesTechnicalSpecsType {
  cpu?: string;
  memory?: string;
  storage?: string;
  dimentions?: string;
}
