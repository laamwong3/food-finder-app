import { Image, Link, Navbar, Text } from "@nextui-org/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navigation = () => {
  const { push } = useRouter();
  return (
    <Navbar variant={"sticky"} isBordered maxWidth={"fluid"}>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Content>
        <Text
          h1
          className="magic-text"
          onClick={() => push("/")}
          css={{ cursor: "pointer" }}
        >
          Categories
        </Text>
      </Navbar.Content>
      <Navbar.Content></Navbar.Content>
    </Navbar>
  );
};

export default Navigation;
