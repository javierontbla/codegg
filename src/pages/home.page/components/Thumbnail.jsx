import React from "react";

import { Container, Img, Text, Title, BodyPreview } from "./Thumbnail.styles";

const Thumbnail = () => {
  return (
    <>
      <Container>
        <Img>img</Img>
        <Text>
          <Title>title</Title>
          <BodyPreview>body</BodyPreview>
        </Text>
      </Container>
    </>
  );
};

export default Thumbnail;
