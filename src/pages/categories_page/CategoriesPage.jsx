import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Masonry from "react-masonry-css";

import Card from "./components/card_component/Card";
import LoadingCategoriesSkeleton from "../../components/loading_components/LoadingCategoriesSkeleton";
import LoadingArticlesSkeleton from "../../components/loading_components/LoadingArticlesSkeleton";
import Error from "../../components/error.component/Error";
import Category from "../../components/category_component/Category";
import {
  fetchUnfilteredArticlesStart,
  fetchFilteredArticlesStart,
  fetchMoreUnfilteredArticles,
  fetchMoreFilteredArticles,
  insertTagRedux,
  deleteTagRedux,
  noMorePostsStart,
  fetchFilteredArticlesSuccess,
} from "../../redux/categories_page/actions";
import {
  AvailableCategoriesActive,
  AvailableCategories,
  ButtonContainer,
  NoMoreButton,
  Container,
  LoadMoreButton,
} from "./CategoriesPage_styles";
import "./CategoriesPage.css";

const CategoriesPage = ({
  loading_articles,
  loading_categories,
  getUnfilteredArticles,
  getFilteredArticles,
  getMoreUnfilteredArticles,
  getMoreFilteredArticles,
  unfilteredArticles,
  filteredArticles,
  lastUnfiltered,
  lastFiltered,
  error,
  availableTags,
  currentTag,
  insertTag,
  deleteTag,
  stopFetching,
  noMorePosts,
  emptyFilteredArticles,
}) => {
  useEffect(() => {
    if (unfilteredArticles.length === 0) getUnfilteredArticles();
    document.title = `Codegg`;
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
      {!loading_categories ? (
        <AvailableCategories>
          {availableTags.map((tag) => {
            return (
              <Category
                onClick={() => sendQueryBtn(tag.toLowerCase())}
                key={tag}
                name={tag.toLowerCase()}
                category={tag.toLowerCase()}
              />
            );
          })}
        </AvailableCategories>
      ) : (
        <LoadingCategoriesSkeleton />
      )}
      {currentTag[0] ? (
        <AvailableCategoriesActive>
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
        </AvailableCategoriesActive>
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
                    <Card
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
                    <Card
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
        <LoadingArticlesSkeleton />
      )}
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
    availableTags,
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
  availableTags,
  currentTag,
  error,
  noMorePosts,
});

const mapDispatchToProps = (dispatch) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
