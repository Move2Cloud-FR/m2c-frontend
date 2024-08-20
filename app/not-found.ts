import { AppRoutes } from "@/app/_utils/Router";
import { redirect } from "next/navigation";

export default function NotFound() {
  redirect(AppRoutes.Home);
}
