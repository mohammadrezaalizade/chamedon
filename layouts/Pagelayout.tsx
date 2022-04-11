import React from "react";
import Header from "../components/UI/Header";

type Props = {
  children: React.ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="dir">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
