export type Lang = {
  [key in possibleLang]: string;
};

export type possibleLang = "en" | "fr";

export const BlankLang: Lang = {
  en: "",
  fr: "",
};

export type BasicEntity = {
  id: string;
  visible: boolean;
};

export type TextList = {
  texts: Lang[];
  list: Lang[];
};
export type TextListKeys<T> = {
  [K in keyof T]: T[K] extends TextList ? K : never;
}[keyof T];

export type CarrierEntity = BasicEntity & {
  name: Lang;
  location: Lang;
  remote: Lang;
  experience: Lang;
  description: Lang;
  shortDescription: Lang;
  salary?: Lang;
  jobDescription: TextList;
  profileRequired: TextList;
};

export type TeamEntity = BasicEntity & {
  linkedin: string;
  avatar: string;
  fullName: Lang;
  job: Lang;
};
