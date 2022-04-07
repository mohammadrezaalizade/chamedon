import React from "react";
import Header from "../components/UI/Header";

interface Props {
  children: JSX.Element;
}

const PageLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="dir">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
