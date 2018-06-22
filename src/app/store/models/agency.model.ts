
export interface Agency {
  id: string;
  name: string;
  countryCode: string;
  abbrev: string;
  type: number;
  infoURL: string;
  wikiURL: string;
  infoURLs: string[];
  islsp: number;
  changed: Date;
}

export const agenciesInitialState: Agency[] = [];
