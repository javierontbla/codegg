import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Masonry from "react-masonry-css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import Card from "./components/card_component/Card";
import Loading from "../../components/loading.component/Loading";
import Error from "../../components/error.component/Error";
import Tag from "../../components/tag.component/Tag";
import {
  fetchUnfilteredArticlesStart,
  fetchFilteredArticlesStart,
  fetchMoreUnfilteredArticles,
  fetchMoreFilteredArticles,
  insertTagRedux,
  deleteTagRedux,
  noMorePostsStart,
  fetchFilteredArticlesSuccess,
} from "../../redux/home.page/actions";
import {
  AvailableCategories,
  FilteredCategories,
  ButtonContainer,
  NoMoreButton,
  Container,
  LoadMoreButton,
  HomeIcon,
} from "./CategoriesPage_styles";
import "./CategoriesPage.css";

const CategoriesPage = ({
  loading,
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

  const remove_categories = () => {
    if (!currentTag[0]) return;
    if (currentTag[0]) {
      deleteTag(currentTag[0]);
      emptyFilteredArticles([]);
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
      {!loading ? (
        <AvailableCategories>
          {availableTags.map((tag) => {
            return (
              <Tag
                onClick={() => sendQueryBtn(tag.toLowerCase())}
                key={tag}
                name={tag.toLowerCase()}
                category={tag.toLowerCase()}
              />
            );
          })}
        </AvailableCategories>
      ) : null}
      {currentTag[0] ? (
        <FilteredCategories>
          {currentTag.map((tag) => {
            return (
              <Tag
                filter={"true"}
                key={tag}
                name={tag.toLowerCase()}
                category={tag.toLowerCase()}
              />
            );
          })}
        </FilteredCategories>
      ) : null}
      {!loading && !error ? (
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
        <Loading />
      )}
    </>
  );
};

// redux
const mapStateToProps = ({
  homePageReducer: {
    loading,
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
  loading,
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
