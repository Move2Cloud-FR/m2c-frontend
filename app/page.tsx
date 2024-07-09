import Image from "next/image";

export default async function Page() {
  const apiResponse = await fetch("http://localhost:8080/api/v1/test");
  const data = await apiResponse.json();
  console.log(data.body.data);

  return <h1>{data.body.data}</h1>;
}
