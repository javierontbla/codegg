import React from "react";
import parse from "html-react-parser";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Title,
  Author,
  Date,
  AuthorContainer,
  InfoContainer,
  ReadTime,
  Body,
  Icon,
} from "./Article.styles";
import { Tags, Tag } from "../../home.page/components/Thumbnail.styles";

const Article = ({ article }) => {
  return (
    <>
      <Container>
        <Title>{article.titulo}</Title>
        <AuthorContainer>
          <Author>{article.autor}</Author>
        </AuthorContainer>
        <Tags post={"true"}>
          {article.tags.map((tag) => {
            return (
              <Tag type={tag} post={"true"} key={tag}>
                #{tag}
              </Tag>
            );
          })}
        </Tags>
        <InfoContainer>
          <Date>{article.fecha}</Date>
          <ReadTime>
            <span>
              <Icon icon={faClock} />
            </span>
            {article.tiempo}
          </ReadTime>
        </InfoContainer>
        <Body>{parse(article.texto)}</Body>
      </Container>
    </>
  );
};

export default Article;
