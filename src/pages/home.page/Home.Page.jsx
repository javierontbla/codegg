import React from "react";

import Thumbnail from "./components/Thumbnail";
import { Container } from "./Home.Page.styles";

const HomePage = () => {
  return (
    <>
      <Container>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </Container>
    </>
  );
};

export default HomePage;
