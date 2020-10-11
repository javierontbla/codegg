import React, { useEffect } from "react";
import parse from "html-react-parser";
import moment from "moment";
import "moment/locale/es";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

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
import {
  Tags,
  Tag,
} from "../../home.page/components/thumbnail.component/Thumbnail.styles";

const Article = ({ article }) => {
  useEffect(() => {
    moment.locale("es");
    window.scrollTo(0, 0);
    document.title = `${article.tituloArticulo}`;
  }, []);

  return (
    <>
      <Container>
        <Title>{article.tituloArticulo}</Title>
        <AuthorContainer>
          <Author>{article.autor}</Author>
        </AuthorContainer>
        <InfoContainer>
          <Date>{moment(article.fecha.toDate()).format("LL")}</Date>
          <ReadTime>
            <span>
              <Icon icon={faReadme} />
            </span>
            {article.tiempo}
          </ReadTime>
        </InfoContainer>
        <Tags post={"true"}>
          {article.tags.map((tag) => {
            return (
              <Tag type={tag} post={"true"} key={tag}>
                #{tag}
              </Tag>
            );
          })}
        </Tags>
        <Body>{parse(article.contenido)}</Body>
      </Container>
    </>
  );
};

export default Article;
