import React, { useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Masonry from "react-masonry-css";
import { connect } from "react-redux";

import ArticleCard from "../article_card_component/ArticleCard";
import ActionButton from "../../../../components/action_button_component/ActionButton";
import LoadingArticles from "../../../../components/loading_components/loading_articles_page/LoadingArticles";
import LoadingCategories from "../../../../components/loading_components/loading_articles_page/LoadingCategories";
import Category from "../../../../components/category_component/Category";
import {
  request_available_categories_start_action,
  request_unfiltered_articles_start_action,
  request_filtered_articles_start_action,
  request_filtered_articles_success_action,
  request_more_unfiltered_articles_start_action,
  request_more_filtered_articles_start_action,
  select_category_action,
  delete_category_action,
} from "../../../../redux/articles_page/actions";
import {
  Container,
  ArticlesPageContainer,
  TopContainer,
  LeftContainer,
  BottomContainer,
  CategoriesContainer,
  RightContainer,
  ActiveCategoryContainer,
  ActionButtonContainer,
  MasonryContainer,
} from "./ArticlesCollection_styles";
import "./ArticlesCollection.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { open_modal_action } from "../../../../redux/modal/actions";

const ArticlesCollection = ({
  loading_articles,
  loading_categories,
  request_available_categories,
  request_unfiltered_articles,
  request_filtered_articles,
  request_more_unfiltered_articles,
  request_more_filtered_articles,
  unfiltered_articles,
  filtered_articles,
  last_unfiltered_article,
  last_filtered_article,
  remaining_unfiltered_articles,
  remaining_filtered_articles,
  categories,
  active_category,
  select_category,
  delete_category,
  clear_filtered_articles,
  user_firebase,
  open_modal,
}) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (categories.length === 0) request_available_categories();
    if (unfiltered_articles.length === 0) request_unfiltered_articles();

    document.title = `Codegg - Reviews`;

    return () => {
      if (active_category[0]) {
        delete_category();
        clear_filtered_articles([]);
      }
    };
  }, []);

  const breakpoints = {
    // masonry grid breakpoints
    default: 2,
    550: 1,
  };

  const request_filtered_articles_to_firebase = (tag) => {
    // requesting same category
    if (active_category[0] === tag) return;
    if (active_category[0] !== tag) delete_category();

    select_category([tag]);
    request_filtered_articles({ tag });
  };

  const push_to_dashboard = () => {
    if (user_firebase) {
      history.push(`${url}/dashboard/${user_firebase.user_id}`);
    } else {
      open_modal();
    }
  };

  const request_more_articles_to_firebase = () => {
    if (filtered_articles.length > 0) {
      if (remaining_filtered_articles) {
        request_more_filtered_articles({
          filtered_articles,
          tag: active_category,
          last_filtered_article,
        });
      }
    } else {
      if (remaining_unfiltered_articles) {
        request_more_unfiltered_articles({
          last_unfiltered_article,
          unfiltered_articles,
        });
      }
    }
  };

  return (
    <>
      <Container className="container">
        <ArticlesPageContainer>
          <TopContainer>
            <ActionButtonContainer onClick={() => push_to_dashboard()}>
              <ActionButton action={"Write a Review"} />
            </ActionButtonContainer>
          </TopContainer>
          <BottomContainer>
            <LeftContainer>
              <CategoriesContainer>
                {loading_categories ? (
                  <LoadingCategories />
                ) : (
                  categories.map((category) => {
                    return (
                      <Category
                        onClick={() =>
                          request_filtered_articles_to_firebase(category)
                        }
                        key={category}
                        name={category}
                        category={category}
                      />
                    );
                  })
                )}
              </CategoriesContainer>
            </LeftContainer>
            <RightContainer>
              <ActiveCategoryContainer length={active_category.length}>
                {active_category.map((category) => {
                  return (
                    <Category category={category} active_category={"true"} />
                  );
                })}
              </ActiveCategoryContainer>
              <MasonryContainer>
                {loading_articles ? (
                  <LoadingArticles />
                ) : (
                  <InfiniteScroll
                    dataLength={
                      unfiltered_articles.length || filtered_articles.length
                    }
                    next={() => request_more_articles_to_firebase()}
                    hasMore={
                      remaining_unfiltered_articles ||
                      remaining_filtered_articles
                    }
                  >
                    <Masonry
                      breakpointCols={breakpoints}
                      className="mansonry-grid"
                      columnClassName="mansonry-grid-column"
                    >
                      {filtered_articles.length > 0
                        ? filtered_articles.map((article) => {
                            return (
                              <ArticleCard
                                request_filtered_articles_to_firebase={(
                                  category
                                ) =>
                                  request_filtered_articles_to_firebase(
                                    category
                                  )
                                }
                                key={`filtered_${article[1]}`}
                                data={article[0]}
                                id={article[1]}
                              />
                            );
                          })
                        : unfiltered_articles.map((article) => {
                            return (
                              <ArticleCard
                                request_filtered_articles_to_firebase={(
                                  category
                                ) =>
                                  request_filtered_articles_to_firebase(
                                    category
                                  )
                                }
                                key={`unfiltered_${article[1]}`}
                                data={article[0]}
                                id={article[1]}
                              />
                            );
                          })}
                    </Masonry>
                  </InfiniteScroll>
                )}
              </MasonryContainer>
            </RightContainer>
          </BottomContainer>
        </ArticlesPageContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  articles_page_reducer: {
    loading_articles,
    loading_categories,
    unfiltered_articles,
    filtered_articles,
    lastUnfiltered,
    lastFiltered,
    categories,
    active_category,
    error,

    last_unfiltered_article,
    last_filtered_article,
    remaining_unfiltered_articles,
    remaining_filtered_articles,
  },
  user_reducer: { user_firebase },
}) => ({
  loading_articles,
  loading_categories,
  unfiltered_articles,
  filtered_articles,
  lastUnfiltered,
  lastFiltered,
  categories,
  active_category,
  error,
  user_firebase,

  last_unfiltered_article,
  last_filtered_article,
  remaining_unfiltered_articles,
  remaining_filtered_articles,
});

const mapDispatchToProps = (dispatch) => ({
  request_available_categories: () =>
    dispatch(request_available_categories_start_action()),
  request_unfiltered_articles: () =>
    dispatch(request_unfiltered_articles_start_action()),

  request_more_unfiltered_articles: (input) =>
    dispatch(request_more_unfiltered_articles_start_action(input)),

  request_filtered_articles: (tag) =>
    dispatch(request_filtered_articles_start_action(tag)),

  request_more_filtered_articles: (articles) =>
    dispatch(request_more_filtered_articles_start_action(articles)),

  select_category: (tag) => dispatch(select_category_action(tag)),
  delete_category: (category) => dispatch(delete_category_action(category)),
  clear_filtered_articles: (empty_arr) =>
    dispatch(request_filtered_articles_success_action(empty_arr)),

  open_modal: () => dispatch(open_modal_action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesCollection);
