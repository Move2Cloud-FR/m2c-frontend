"use server";

import { cookies } from "next/headers";

export async function setLanguageCookie(lang: string) {
  cookies().set("language", lang, {
    // Set cookie for 1 year
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
  });
}
