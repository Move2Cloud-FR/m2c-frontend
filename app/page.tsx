import { getDictionary } from "@/app/lang/dictionaries";
import Home from "@/app/_components/pages/Home";
import Image from "next/image";

interface IPageProps {
  params: { lang: string };
}

export default async function Page() {
  const dict = await getDictionary();
  // const dict = await getDictionary(lang); // en
  // return <button>{dict.products.cart}</button>; // Add to Cart

  // const apiResponse = await fetch("http://localhost:8080/api/v1/test");
  // const data = await apiResponse.json();
  // console.log(data.body.data);

  return (
    <>
      <Home lang={dict} />
      {/* <h1>{data.body.data}</h1> */}
    </>
  );
}
