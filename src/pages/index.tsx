import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const { push } = useRouter();
  return (
    <>
      <div>Home</div>
      {/* <Link href={"/about"} passHref> */}
      <Button onPress={() => push("/about")}>NEXT UI</Button>
      {/* </Link> */}
    </>
  );
};

export default Home;
