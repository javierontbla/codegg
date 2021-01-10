import React from "react";

import { Container, Message, Icon } from "./OpinionsCard_styles";
import DropDownSVG from "./media/dropdown_button.svg";

const OpinionsCard = () => {
  return (
    <>
      <Container>
        <Message>What do people say about John?</Message>
        <Icon src={DropDownSVG} />
      </Container>
    </>
  );
};

export default OpinionsCard;
