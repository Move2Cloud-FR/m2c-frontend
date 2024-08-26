import { ILang } from "@/app/lang/dictionaries/ILang";
import { cookies } from "next/headers";
import "server-only";

const dictionaries: {
  [key: string]: () => Promise<any>;
} = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
};
function getLocale() {
  const cookieStore = cookies();
  const language = cookieStore.get("language") || {
    name: "language",
    value: "fr",
  };
  return language.value;
}

export const getDictionary: () => Promise<ILang> = async () => {
  const locale = await getLocale();
  return dictionaries[locale]();
};
