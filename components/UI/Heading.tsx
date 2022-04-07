import React from "react";
import Head from "next/head";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <Head>
      <title>چمدون |  {title}</title>
      <link rel="shortcut icon" href="/assests/img/logo.svg" />
    </Head>
  );
};

export default Heading;
