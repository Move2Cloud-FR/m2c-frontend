"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function setLanguageCookie(lang: string) {
  cookies().set("language", lang, {
    // Set cookie for 1 year
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
  });
  revalidatePath("/");
}

// export async function fetchConsultantsByTags(selectedTags: string[]) {
//   try {
//     const response = await fetch(
//       "http://localhost:8080/api/v1/public/consultant/tags",
//       {
//         method: "POST",
//         body: JSON.stringify(selectedTags),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data.body; // Return the consultants
//   } catch (error) {
//     console.error("Fetch failed:", error);
//     return []; // Return an empty array in case of error
//   }
// }
