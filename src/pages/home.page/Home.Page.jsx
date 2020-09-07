import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/es";
import Masonry from "react-masonry-css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Thumbnail from "./components/thumbnail.component/Thumbnail";
import Loading from "../../components/loading.component/Loading";
import Error from "../../components/error.component/Error";
import {
  fetchUnfilteredArticlesStart,
  fetchFilteredArticlesStart,
  fetchMoreUnfilteredArticles,
  fetchMoreFilteredArticles,
  insertTagRedux,
  deleteTagRedux,
  noMorePostsStart,
} from "../../redux/home.page/actions";
import {
  Container,
  Time,
  LoadMore,
  ButtonContainer,
  AvailableTagsContainer,
  Icon,
  IconContainer,
  Tags,
  Tag,
  Message,
} from "./Home.Page.styles";
import "./Home.Page.css";

const HomePage = ({
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
}) => {
  useEffect(() => {
    if (unfilteredArticles.length === 0) getUnfilteredArticles();
    moment.locale("es");
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
      removeTag(currentTag[0]);
      insertTag(tag);
      getFilteredArticles({
        input: tag,
        previousArticles: filteredArticles,
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

  const removeTag = (tag) => {
    // function to remove articles from main array when tag clicked
    deleteTag(tag);
    for (const article in filteredArticles) {
      if (filteredArticles[article].tags.includes(tag)) {
        delete filteredArticles[article];
      }
    }
  };

  return (
    <>
      <Time>{moment().format("LL")}</Time>
      {!loading ? (
        <AvailableTagsContainer>
          {availableTags.map((tag) => {
            return (
              <Tag
                type={tag.toLowerCase()}
                onClick={() => sendQueryBtn(tag.toLowerCase())}
                search={"true"}
                key={tag}
              >
                #{tag.toLowerCase()}
              </Tag>
            );
          })}
        </AvailableTagsContainer>
      ) : null}
      {currentTag[0] ? (
        <Tags>
          {currentTag.map((tag) => {
            return (
              <Tag type={tag} filter={"true"} key={tag}>
                #{tag}
                <IconContainer>
                  <Icon
                    icon={faTimes}
                    cross={"true"}
                    onClick={() => removeTag(tag)}
                    type={tag}
                  />
                </IconContainer>
              </Tag>
            );
          })}
        </Tags>
      ) : null}
      {!loading && !error ? (
        Object.entries(filteredArticles).length === 0 ? (
          <>
            <Container>
              <Masonry
                breakpointCols={breakpoints}
                className="mansonry-grid"
                columnClassName="mansonry-grid-column"
              >
                {unfilteredArticles.map((article) => {
                  return (
                    <Thumbnail
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
                <LoadMore onClick={() => loadMoreUnfilteredArticles()}>
                  cargar más
                </LoadMore>
              ) : (
                <Message>no hay más artículos</Message>
              )}
            </ButtonContainer>
          </>
        ) : Object.entries(filteredArticles).length > 0 ? (
          <>
            <Container>
              <Masonry
                breakpointCols={breakpoints}
                className="mansonry-grid"
                columnClassName="mansonry-grid-column"
              >
                {Object.entries(filteredArticles).map((article) => {
                  return (
                    <Thumbnail
                      search={(tag) => sendQueryBtn(tag)}
                      key={article[0]}
                      data={article[1]}
                      id={article[0]}
                    />
                  );
                })}
              </Masonry>
            </Container>
            <ButtonContainer>
              {!noMorePosts ? (
                <LoadMore onClick={() => loadMoreFilteredArticles()}>
                  cargar más
                </LoadMore>
              ) : (
                <Message>no hay más artículos</Message>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
