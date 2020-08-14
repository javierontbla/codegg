import React from "react";

import {
  Container,
  Img,
  Text,
  Title,
  BodyPreview,
  Date,
  Time,
  Hashtags,
  Hashtag,
  Span,
  ReadMore,
} from "./Thumbnail.styles";

const Thumbnail = ({ article }) => {
  console.log(article);
  return (
    <>
      <Container>
        <Img source={article.thumbnail} />
        <Text>
          <Title>{article.titulo}</Title>
          <Date>{article.fecha}</Date>
          <BodyPreview>
            {article.texto}...
            <Span>
              <ReadMore to="/post">leer más</ReadMore>
            </Span>
          </BodyPreview>
        </Text>
        <Time>{article.tiempo}</Time>
        <Hashtags>
          <Hashtag></Hashtag>
        </Hashtags>
      </Container>
    </>
  );
};

export default Thumbnail;
