import { getDictionary } from "@/app/lang/dictionaries";
import Home from "@/app/_components/pages/Home";

interface IPageProps {
  params: { lang: string };
}

export default async function Page() {
  const dict = await getDictionary();

  return (
    <>
      <Home lang={dict} />
    </>
  );
}
