import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import moment from "moment";
import "moment/locale/es";

import {
  Container,
  HyperLink,
  LeftContainer,
  ArticleImage,
  TopContainer,
  TitleArticle,
  Score,
  Body,
  RightContainer,
  AuthorContainer,
  ProfileBoxContainer,
  Description,
  BottomContainer,
  Trends,
  TrendIcon,
  Votes,
  TagsContainer,
} from "./Article_styles";
import {
  select_category_action,
  delete_category_action,
  request_filtered_articles_start_action,
} from "../../../../redux/articles_page/actions";
import ProfileBox from "../../../../components/profile_box_component/ProfileBox";
import Category from "../../../../components/category_component/Category";
import UpTrend from "./media/up_button.svg";
import { votes_async } from "../../../../firebase/functions/votes";

const Article = ({
  data,
  id,
  user_firebase,
  active_category,
  filtered_articles,
  select_category,
  delete_category,
  request_filtered_articles,
}) => {
  moment.locale("en");
  const [votes, set_votes] = useState(data.votes);
  const vote_ref = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Codegg - ${data.title}`;
  }, []);

  const request_tag = (tag) => {
    if (active_category[0] === tag) {
      return;
    } else if (!active_category[0]) {
      select_category([tag]);
      request_filtered_articles({
        input: tag,
        previous_filtered_articles: filtered_articles,
      });
    } else {
      delete_category();
      select_category([tag]);
      request_filtered_articles({
        input: tag,
        previous_filtered_articles: [],
      });
    }
  };

  const vote_article_to_firebase = async () => {
    const { user_id } = user_firebase.user_data;
    if (vote_ref.current === true) return;

    vote_ref.current = true; // start
    const response = await votes_async({
      doc_path: `articles/${id}`,
      doc_votes_path: `articles/${id}/votes/${user_id}`,
    });

    set_votes(response[0].votes);
    vote_ref.current = false; // end
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <ArticleImage article_image={data.article_image} />
          <TopContainer>
            <TitleArticle>{data.title}</TitleArticle>
            <Score>{data.score}</Score>
          </TopContainer>
          <Body>{parse(data.content)}</Body>
        </LeftContainer>
        <RightContainer>
          <AuthorContainer>
            <ProfileBoxContainer>
              <ProfileBox
                profile_image={data.profile_image}
                user={data.user}
                user_id={data.user_id}
                date={data.date}
              />
            </ProfileBoxContainer>
            <Description>{data.description}</Description>
            <BottomContainer>
              <Trends>
                <TrendIcon
                  src={UpTrend}
                  onClick={() => vote_article_to_firebase()}
                />
                <Votes>{votes}</Votes>
              </Trends>
            </BottomContainer>
          </AuthorContainer>
          <TagsContainer>
            {data.categories.map((tag) => {
              return (
                <HyperLink to="/reviews">
                  <Category
                    onClick={() => request_tag(tag)}
                    article={"true"}
                    category={tag}
                    key={tag}
                  />
                </HyperLink>
              );
            })}
          </TagsContainer>
        </RightContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  articles_page_reducer: { active_category, filtered_articles },
}) => ({
  user_firebase,
  active_category,
  filtered_articles,
});

const mapDispatchToProps = (dispatch) => ({
  select_category: (category) => dispatch(select_category_action(category)),
  delete_category: (category) => dispatch(delete_category_action(category)),
  request_filtered_articles: (input) =>
    dispatch(request_filtered_articles_start_action(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
