import React from "react";

export default async function Page({ params: { lang } }) {
  console.log("lang", lang); // en

  // const dict = await getDictionary(lang); // en
  // return <button>{dict.products.cart}</button>; // Add to Cart

  // const apiResponse = await fetch("http://localhost:8080/api/v1/test");
  // const data = await apiResponse.json();
  // console.log(data.body.data);

  // return <h1>{data.body.data}</h1>;
  return <h1>Services</h1>;
}
