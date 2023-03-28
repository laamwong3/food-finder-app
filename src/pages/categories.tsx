import { trpc } from "@/utils/trpc";
import React, { useState } from "react";

const categories = () => {
  const getFoodCategories = trpc.getFoodCategories.useQuery();
  const [categories, setCategories] = useState();

  return <div>categories</div>;
};

export default categories;
