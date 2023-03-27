import { Button, Col, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import bgImage from "../assets/background.jpg";

const Home = () => {
  const { push } = useRouter();
  return (
    <>
      <Row css={{ width: "100vw", height: "100vh" }} justify="center">
        <Image
          src={bgImage.src}
          alt="food"
          style={{ objectFit: "cover", opacity: 0.25 }}
          fill
        />
        <Row
          css={{ width: "100%", height: "100%" }}
          justify="center"
          align="center"
        >
          <Col css={{ width: "60%" }}>
            <Text h1 css={{ textAlign: "center" }}>
              Welcome to <span className="magic-text">Food Finder</span>
            </Text>
            <Row justify="center">
              <Button auto bordered size={"xl"} ghost>
                GET STARTED
              </Button>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Home;
