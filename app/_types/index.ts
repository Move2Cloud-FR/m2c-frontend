export type Lang = {
  [key in possibleLang]: string;
};

export type possibleLang = "en" | "fr";

export const BlankLang: Lang = {
  en: "",
  fr: "",
};

export type TraceableEntity = {
  id: string;
};
export type SortedEntity = TraceableEntity & {
  index: number;
  enabled: boolean;
};

export type TextList = {
  texts: Lang[];
  list: Lang[];
};

export type TextListKeys<T> = {
  [K in keyof T]: T[K] extends TextList ? K : never;
}[keyof T];

// export type Section = {
//   sectionTitle: Lang;
//   sectionDescription: Lang;
// };

export type CarrierEntity = SortedEntity & {
  name: Lang;
  location: Lang;
  remote: Lang;
  experience: Lang;
  description: Lang;
  salary: Lang;
  shortDescription: Lang;
  jobDescription: TextList;
  profileRequired: TextList;
};

export type TeamEntity = SortedEntity & {
  linkedin: string;
  avatar: string;
  fullName: string;
  job: Lang;
};
export type ClientEntity = SortedEntity & {
  name: string;
  logo: string;
};
export type TagEntity = SortedEntity & {
  tagName: string;
};
export type ConsultantEntity = SortedEntity & {
  fullName: string;
  title: string;
  description: string;
  cvUrl: string;
  avatar: string;
  tags: TagEntity[];
};
