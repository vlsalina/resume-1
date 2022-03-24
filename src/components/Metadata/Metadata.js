import React from "react";
import { Helmet } from "react-helmet";

const Metadata = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Vincent Salinas Resume</title>
      <link
        rel="canonical"
        href="https://heyimvincent3490-resume.netlify.app/"
      />
      <meta name="description" content="Vincent Salinas Resume" />
    </Helmet>
  );
};

export default Metadata;
