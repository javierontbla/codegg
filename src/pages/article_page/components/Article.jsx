import React, { useEffect } from "react";
import { connect } from "react-redux";
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
  Separator,
  QueryLink,
} from "./Article.styles";
import {
  fetchFilteredArticlesStart,
  insertTagRedux,
  deleteTagRedux,
  fetchFilteredArticlesSuccess,
} from "../../../redux/categories_page/actions";
import { AvailableCategories } from "../../categories_page/CategoriesPage_styles";
import Category from "../../../components/category_component/Category";

const Article = ({
  article,
  currentTag,
  getFilteredArticles,
  insertTag,
  deleteTag,
  emptyFilteredArticles,
  filteredArticles,
}) => {
  useEffect(() => {
    moment.locale("es");
    window.scrollTo(0, 0);
    document.title = `${article.tituloArticulo}`;
  }, []);

  const sendSearchQuery = (tag) => {
    if (currentTag[0] === tag) {
      return;
    } else if (!currentTag[0]) {
      insertTag(tag);
      getFilteredArticles({
        input: tag,
        previousArticles: filteredArticles,
      });
    } else {
      deleteTag(currentTag[0]);
      insertTag(tag);
      getFilteredArticles({
        input: tag,
        previousArticles: [],
      });
    }
  };

  return (
    <>
      <Container>
        <Title>{article.tituloArticulo}</Title>
        <AuthorContainer>
          <Author>{article.autor}</Author>
        </AuthorContainer>
        <InfoContainer>
          <Date>{moment(article.fecha.toDate()).format("LL")}</Date>
          <Separator> · </Separator>
          <ReadTime>
            <span>
              <Icon icon={faReadme} />
            </span>
            {article.tiempo}
          </ReadTime>
        </InfoContainer>
        <AvailableCategories post={"true"}>
          {article.tags.map((tag) => {
            return (
              <QueryLink to="/">
                <Category
                  category={tag}
                  name={tag}
                  key={tag}
                  post={"true"}
                  onClick={() => sendSearchQuery(tag)}
                />
              </QueryLink>
            );
          })}
        </AvailableCategories>
        <Body>{parse(article.contenido)}</Body>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  homePageReducer: { currentTag, filteredArticles },
}) => ({
  currentTag,
  filteredArticles,
});

const mapDispatchToProps = (dispatch) => ({
  getFilteredArticles: (input) => dispatch(fetchFilteredArticlesStart(input)),
  insertTag: (tag) => dispatch(insertTagRedux(tag)),
  deleteTag: (tag) => dispatch(deleteTagRedux(tag)),
  emptyFilteredArticles: (arr) => dispatch(fetchFilteredArticlesSuccess(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
