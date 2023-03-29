import { useRouter } from "next/router";
import React from "react";

const mealId = () => {
  const { query } = useRouter();
  console.log(query);
  return <div>mealId</div>;
};

export default mealId;
