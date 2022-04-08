import React from "react";
import { NextPage } from "next";
import Heading from "../../components/UI/Heading";
import Homepage from "../../components/home";
const Tours: NextPage = () => {
  return (
    <div>
      <Heading title="تورها" />
      <Homepage />
    </div>
  );
};

export default Tours;
