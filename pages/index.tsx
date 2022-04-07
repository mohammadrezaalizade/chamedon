import type { NextPage } from "next";
import Heading from "../components/UI/Heading";
import Homepage from "../components/home";
const Home: NextPage = () => {
  return (
    <div>
      <Heading title="خانه" />
      <Homepage />
    </div>
  );
};

export default Home;
