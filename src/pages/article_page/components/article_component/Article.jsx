import React, { useEffect } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import moment from "moment";
import "moment/locale/es";

import {
  Container,
  LeftContainer,
  TitleArticle,
  Body,
  RightContainer,
  AuthorContainer,
  ProfileBoxContainer,
  Description,
  TrendsContainer,
  Trends,
  Icon,
  Votes,
  CategoriesContainer,
} from "./Article_styles";
import {
  select_category_action,
  delete_category_action,
} from "../../../../redux/articles_page/actions";
import Title from "../../../../components/title_component/Title";
import ProfileBox from "../../../../components/profile_box_component/ProfileBox";
import Category from "../../../../components/category_component/Category";
import UpTrend from "./media/up_button.svg";
import DownTrend from "./media/down_button.svg";

const Article = ({ data }) => {
  useEffect(() => {
    moment.locale("en");
    window.scrollTo(0, 0);

    document.title = `Codegg - ${data.title}`;
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
        <LeftContainer>
          <TitleArticle>{data.title}</TitleArticle>
          <Body>{parse(data.description)}</Body>
        </LeftContainer>
        <RightContainer>
          <Title title={"Investor"} />
          <AuthorContainer>
            <ProfileBoxContainer>
              <ProfileBox
                profile_image={data.profile_image}
                user={data.user}
                date={data.date}
              />
            </ProfileBoxContainer>
            <Description>{parse(data.description)}</Description>
            <TrendsContainer>
              <Trends>
                <Icon src={UpTrend} />
                <Votes>{"12"}</Votes>
                <Icon src={DownTrend} />
              </Trends>
            </TrendsContainer>
          </AuthorContainer>
          <CategoriesContainer>
            {data.categories.map((category) => {
              return <Category category={category} key={category} />;
            })}
          </CategoriesContainer>
        </RightContainer>
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
