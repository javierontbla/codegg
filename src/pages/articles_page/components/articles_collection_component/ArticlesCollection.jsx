import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
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
  LinkContainer,
  ActionButtonContainer,
  MasonryContainer,
} from "./ArticlesCollection_styles";
import "./ArticlesCollection.css";

const ArticlesCollection = ({
  match,
  loading_articles,
  loading_categories,
  request_available_categories,
  request_unfiltered_articles,
  request_filtered_articles,
  getMoreUnfilteredArticles,
  getMoreFilteredArticles,
  unfiltered_articles,
  filtered_articles,
  lastUnfiltered,
  lastFiltered,
  categories,
  active_category,
  select_category,
  delete_category,
  stopFetching,
  noMorePosts,
  clear_filtered_articles,
  create_draft,
  active_user_database,
}) => {
  useEffect(() => {
    if (categories.length === 0) request_available_categories();
    if (unfiltered_articles.length === 0) request_unfiltered_articles();

    document.title = `Codegg - Discover Your Next Investment`;

    return () => {
      if (active_category[0]) {
        delete_category(active_category[0]);
        clear_filtered_articles([]);
      }
    };
  }, []);

  const breakpoints = {
    // masonry grid breakpoints
    default: 2,
    550: 1,
  };

  const request_filtered_articles_fun = (category) => {
    // requesting same category
    if (active_category[0] === category) return;
    if (active_category[0] !== category) delete_category();

    select_category([category]);
    request_filtered_articles({
      category,
      previous_filtered_articles: [],
    });
  };

  const loadMoreUnfilteredArticles = () => {
    if (!lastUnfiltered) {
      stopFetching();
      return;
    }
    getMoreUnfilteredArticles({
      previousArticles: unfiltered_articles,
      lastElement: lastUnfiltered,
    });
  };

  const loadMoreFilteredArticles = () => {
    if (!lastFiltered) {
      stopFetching();
      return;
    }
    getMoreFilteredArticles({
      previousArticles: filtered_articles,
      lastElement: lastFiltered,
      tag: active_category[0],
    });
  };

  return (
    <>
      <Container className="container">
        <ArticlesPageContainer>
          <TopContainer>
            <ActionButtonContainer>
              <LinkContainer to={`${match.path}/draft`}>
                <ActionButton action={"Write"} />
              </LinkContainer>
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
                          request_filtered_articles_fun(category.toLowerCase())
                        }
                        key={category}
                        name={category.toLowerCase()}
                        category={category.toLowerCase()}
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
                    <Category
                      category={category.toLowerCase()}
                      active_category={"true"}
                    />
                  );
                })}
              </ActiveCategoryContainer>
              <MasonryContainer>
                {loading_articles ? (
                  <LoadingArticles />
                ) : (
                  <Masonry
                    breakpointCols={breakpoints}
                    className="mansonry-grid"
                    columnClassName="mansonry-grid-column"
                  >
                    {filtered_articles.length > 0
                      ? filtered_articles.map((article) => {
                          return (
                            <ArticleCard
                              match={match.path}
                              request_filtered_articles_fun={(category) =>
                                request_filtered_articles_fun(
                                  category.toLowerCase()
                                )
                              }
                              key={article[0]}
                              data={article[0]}
                              id={article[1]}
                            />
                          );
                        })
                      : unfiltered_articles.map((article) => {
                          return (
                            <ArticleCard
                              match={match.path}
                              request_filtered_articles_fun={(category) =>
                                request_filtered_articles_fun(category)
                              }
                              key={article[1]}
                              data={article[0]}
                              id={article[1]}
                            />
                          );
                        })}
                  </Masonry>
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
  },
  user_reducer: { active_user_database },
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
  active_user_database,
});

const mapDispatchToProps = (dispatch) => ({
  request_available_categories: () =>
    dispatch(request_available_categories_start_action()),
  request_unfiltered_articles: () =>
    dispatch(request_unfiltered_articles_start_action()),
  request_filtered_articles: (category) =>
    dispatch(request_filtered_articles_start_action(category)),
  select_category: (category) => dispatch(select_category_action(category)),
  delete_category: (category) => dispatch(delete_category_action(category)),
  clear_filtered_articles: (empty_arr) =>
    dispatch(request_filtered_articles_success_action(empty_arr)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ArticlesCollection)
);
