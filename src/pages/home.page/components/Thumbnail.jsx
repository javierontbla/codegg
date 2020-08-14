import React from "react";

import {
  Container,
  Img,
  Text,
  Title,
  BodyPreview,
  Time,
  Hashtags,
  Hashtag,
  Span,
  ReadMore,
} from "./Thumbnail.styles";

const test = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
quae ab illo inventore veritatis et quasi architecto beatae vitae`;

const Thumbnail = () => {
  return (
    <>
      <Container>
        <Img
          source={
            "https://i.insider.com/548b68ebecad049c333e47fd?width=750&format=jpeg&auto=webp"
          }
        />
        <Text>
          <Title>Por que Amazon es una mala inversión</Title>
          <BodyPreview>
            {test}...
            <Span>
              <ReadMore to="/post">leer más</ReadMore>
            </Span>
          </BodyPreview>
        </Text>
        <Time>11 minutos</Time>
        <Hashtags>
          <Hashtag>#react</Hashtag>
        </Hashtags>
      </Container>
    </>
  );
};

export default Thumbnail;
