import React from "react";
import moment from "moment";
import "moment/locale/es";

import Thumbnail from "./components/Thumbnail";
import { Container, Time, LoadMore, ButtonContainer } from "./Home.Page.styles";

const HomePage = () => {
  moment.locale("es");
  return (
    <>
      <Time>{moment().format("LL")}</Time>
      <Container>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </Container>
      <ButtonContainer>
        <LoadMore>cargar más</LoadMore>
      </ButtonContainer>
    </>
  );
};

export default HomePage;
