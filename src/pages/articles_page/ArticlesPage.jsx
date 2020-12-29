import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Masonry from "react-masonry-css";

import ArticleCard from "./components/article_card_component/ArticleCard";
import LoadingCategories from "../../components/loading_components/loading_articles_page/LoadingCategories";
import LoadingArticles from "../../components/loading_components/loading_articles_page/LoadingArticles";
import Error from "../../components/error.component/Error";
import Category from "../../components/category_component/Category";
import {
  request_available_categories_action_start,
  fetchUnfilteredArticlesStart,
  fetchFilteredArticlesStart,
  fetchMoreUnfilteredArticles,
  fetchMoreFilteredArticles,
  insertTagRedux,
  deleteTagRedux,
  noMorePostsStart,
  fetchFilteredArticlesSuccess,
} from "../../redux/articles_page/actions";
import {
  AvailableCategoriesActiveContainer,
  AvailableCategoriesContainer,
  ButtonContainer,
  NoMoreButton,
  Container,
  LoadMoreButton,
  ArticlesPageContainer,
} from "./ArticlesPage_styles";
import "./ArticlesPage.css";

const ArticlesPage = ({
  loading_articles,
  loading_categories,
  request_available_categories,
  getUnfilteredArticles,
  getFilteredArticles,
  getMoreUnfilteredArticles,
  getMoreFilteredArticles,
  unfilteredArticles,
  filteredArticles,
  lastUnfiltered,
  lastFiltered,
  error,
  available_categories,
  currentTag,
  insertTag,
  deleteTag,
  stopFetching,
  noMorePosts,
  emptyFilteredArticles,
}) => {
  useEffect(() => {
    if (unfilteredArticles.length === 0) getUnfilteredArticles();
    if (available_categories.length === 0) request_available_categories();

    document.title = `Codegg - Artículos`;
    moment.locale("es");

    return () => {
      if (currentTag[0]) {
        deleteTag(currentTag[0]);
        emptyFilteredArticles([]);
      }
    };
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    500: 1,
  };

  const sendQueryBtn = (tag) => {
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

  const loadMoreUnfilteredArticles = () => {
    if (!lastUnfiltered) {
      stopFetching();
      return;
    }
    getMoreUnfilteredArticles({
      previousArticles: unfilteredArticles,
      lastElement: lastUnfiltered,
    });
  };

  const loadMoreFilteredArticles = () => {
    if (!lastFiltered) {
      stopFetching();
      return;
    }
    getMoreFilteredArticles({
      previousArticles: filteredArticles,
      lastElement: lastFiltered,
      tag: currentTag[0],
    });
  };

  return (
    <>
      <ArticlesPageContainer className="container">
        {loading_categories ? (
          <LoadingCategories />
        ) : (
          <AvailableCategoriesContainer>
            {available_categories.map((tag) => {
              return (
                <Category
                  onClick={() => sendQueryBtn(tag.toLowerCase())}
                  key={tag}
                  name={tag.toLowerCase()}
                  category={tag.toLowerCase()}
                />
              );
            })}
          </AvailableCategoriesContainer>
        )}
        {currentTag[0] ? (
          <AvailableCategoriesActiveContainer>
            {currentTag.map((tag) => {
              return (
                <Category
                  filter={"true"}
                  key={tag}
                  name={tag.toLowerCase()}
                  category={tag.toLowerCase()}
                />
              );
            })}
          </AvailableCategoriesActiveContainer>
        ) : null}
        {!loading_articles && !error ? (
          filteredArticles.length === 0 ? (
            <>
              <Container>
                <Masonry
                  breakpointCols={breakpoints}
                  className="mansonry-grid"
                  columnClassName="mansonry-grid-column"
                >
                  {unfilteredArticles.map((article) => {
                    return (
                      <ArticleCard
                        search={(tag) => sendQueryBtn(tag)}
                        key={article[1]}
                        data={article[0]}
                        id={article[1]}
                      />
                    );
                  })}
                </Masonry>
              </Container>
              <ButtonContainer>
                {!noMorePosts ? (
                  <LoadMoreButton onClick={() => loadMoreUnfilteredArticles()}>
                    cargar más
                  </LoadMoreButton>
                ) : (
                  <NoMoreButton>· · ·</NoMoreButton>
                )}
              </ButtonContainer>
            </>
          ) : filteredArticles.length > 0 ? (
            <>
              <Container>
                <Masonry
                  breakpointCols={breakpoints}
                  className="mansonry-grid"
                  columnClassName="mansonry-grid-column"
                >
                  {filteredArticles.map((article) => {
                    return (
                      <ArticleCard
                        search={(tag) => sendQueryBtn(tag)}
                        key={article[0]}
                        data={article[0]}
                        id={article[1]}
                      />
                    );
                  })}
                </Masonry>
              </Container>
              <ButtonContainer>
                {!noMorePosts ? (
                  <LoadMoreButton onClick={() => loadMoreFilteredArticles()}>
                    cargar más
                  </LoadMoreButton>
                ) : (
                  <NoMoreButton>· · ·</NoMoreButton>
                )}
              </ButtonContainer>
            </>
          ) : null
        ) : error ? (
          <Error />
        ) : (
          <LoadingArticles />
        )}
      </ArticlesPageContainer>
    </>
  );
};

// redux
const mapStateToProps = ({
  categories_page_reducer: {
    loading_articles,
    loading_categories,
    unfilteredArticles,
    filteredArticles,
    lastUnfiltered,
    lastFiltered,
    available_categories,
    currentTag,
    error,
    noMorePosts,
  },
}) => ({
  loading_articles,
  loading_categories,
  unfilteredArticles,
  filteredArticles,
  lastUnfiltered,
  lastFiltered,
  available_categories,
  currentTag,
  error,
  noMorePosts,
});

const mapDispatchToProps = (dispatch) => ({
  request_available_categories: () =>
    dispatch(request_available_categories_action_start()),
  getUnfilteredArticles: () => dispatch(fetchUnfilteredArticlesStart()),
  getFilteredArticles: (input) => dispatch(fetchFilteredArticlesStart(input)),
  getMoreFilteredArticles: (obj) => dispatch(fetchMoreFilteredArticles(obj)),
  getMoreUnfilteredArticles: (obj) =>
    dispatch(fetchMoreUnfilteredArticles(obj)),
  insertTag: (tag) => dispatch(insertTagRedux(tag)),
  deleteTag: (tag) => dispatch(deleteTagRedux(tag)),
  stopFetching: () => dispatch(noMorePostsStart()),
  emptyFilteredArticles: (arr) => dispatch(fetchFilteredArticlesSuccess(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);
