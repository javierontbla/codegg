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
  select_category_action,
  delete_category_action,
} from "../../../redux/articles_page/actions";
import Category from "../../../components/category_component/Category";

const Article = ({ data }) => {
  useEffect(() => {
    moment.locale("en");
    window.scrollTo(0, 0);

    document.title = `${data.title_link}`;
  }, []);

  /*
  const sendSearchQuery = (tag) => {
    if (currentTag[0] === tag) {
      return;
    } else if (!currentTag[0]) {
      select_category(tag);
      getFilteredArticles({
        input: tag,
        previousArticles: filteredArticles,
      });
    } else {
      delete_category(currentTag[0]);
      select_category(tag);
      getFilteredArticles({
        input: tag,
        previousArticles: [],
      });
    }
  };

  */

  return (
    <>
      <Container>
        <Title>{data.title}</Title>
        <AuthorContainer>
          <Author>{data.user}</Author>
        </AuthorContainer>
        <InfoContainer>
          <Date>{moment(data.date.toDate()).format("LL")}</Date>
        </InfoContainer>
        <Body>{parse(data.description)}</Body>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
  select_category: (category) => dispatch(select_category_action(category)),
  delete_category: (category) => dispatch(delete_category_action(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
