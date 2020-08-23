import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/es";
import Masonry from "react-masonry-css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import Thumbnail from "./components/Thumbnail";
import Skeleton from "./components/Skeleton";
import Error from "../../components/error.component/Error";
import {
  fetchUnfilteredArticlesStart,
  fetchFilteredArticlesStart,
  fetchMoreUnfilteredArticles,
  fetchMoreFilteredArticles,
  storeAvailableTagsStart,
} from "../../redux/home.page/actions";
import {
  Container,
  Time,
  LoadMore,
  ButtonContainer,
  SearchBox,
  SearchContainer,
  Icon,
  IconContainer,
  Tags,
  Tag,
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
  lastFiltered,
  error,
  storeAvailableTags,
  availableTags,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedTags, setSearchedTags] = useState([]);

  useEffect(() => {
    getUnfilteredArticles();
    storeAvailableTags();
    moment.locale("es");
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const handleSearchInput = (input) => {
    setSearchInput(input.toLowerCase());
  };

  const sendQuery = (e) => {
    if ((e.key === "Enter" || e.key === "click") && searchInput !== "") {
      if (!availableTags.includes(searchInput)) {
        setSearchInput("");
        return;
      } else if (searchedTags.includes(searchInput)) {
        setSearchInput("");
        return;
      } else {
        getFilteredArticles({
          input: searchInput,
          previousArticles: filteredArticles,
        });
        setSearchedTags((prev) => [...prev, searchInput]);
        setSearchInput("");
      }
    }
  };

  const sendQueryBtn = (tag) => {
    if (!availableTags.includes(tag)) {
      setSearchInput("");
      return;
    } else if (searchedTags.includes(tag)) {
      return;
    } else {
      getFilteredArticles({
        input: tag.toLowerCase(),
        previousArticles: filteredArticles,
      });
      setSearchedTags((prev) => [...prev, tag.toLowerCase()]);
    }
  };

  const loadMoreUnfilteredArticles = () => {
    getMoreUnfilteredArticles({
      previousArticles: unfilteredArticles[0],
      lastElement: unfilteredArticles[1],
    });
  };

  const loadMoreFilteredArticles = () => {
    getMoreFilteredArticles({
      previousArticles: filteredArticles,
      lastElement: lastFiltered,
      tags: searchedTags,
    });
  };

  const removeTag = (tag) => {
    // function to remove articles from main array when tag clicked
    for (const article in filteredArticles) {
      if (filteredArticles[article]["tags"].includes(tag.toLowerCase())) {
        delete filteredArticles[article];
      }
    }
    setSearchedTags((prev) => prev.filter((t) => t !== tag.toLowerCase()));
  };

  return (
    <>
      <Time>{moment().format("LL")}</Time>
      <SearchContainer>
        <SearchBox
          value={searchInput}
          type="text"
          placeholder="buscar por tag - p. ej. react, redux, node"
          onChange={(e) => handleSearchInput(e.target.value)}
          onKeyDown={(e) => sendQuery(e)}
        />
        <Icon icon={faSearch} onClick={() => sendQuery("click")} />
      </SearchContainer>
      {searchedTags.length > 0 ? (
        <Tags>
          {searchedTags.map((tag) => {
            return (
              <Tag type={tag}>
                #{tag}
                <IconContainer>
                  <Icon
                    icon={faTimes}
                    cross={"true"}
                    onClick={() => removeTag(tag)}
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
                {unfilteredArticles[0].map((article) => {
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
              <LoadMore onClick={() => loadMoreUnfilteredArticles()}>
                cargar más
              </LoadMore>
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
              <LoadMore onClick={() => loadMoreFilteredArticles()}>
                cargar más
              </LoadMore>
            </ButtonContainer>
          </>
        ) : null
      ) : error ? (
        <Error />
      ) : (
        <Skeleton />
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
    lastFiltered,
    error,
    availableTags,
  },
}) => ({
  loading,
  unfilteredArticles,
  filteredArticles,
  lastFiltered,
  error,
  availableTags,
});

const mapDispatchToProps = (dispatch) => ({
  getUnfilteredArticles: () => dispatch(fetchUnfilteredArticlesStart()),
  getFilteredArticles: (input) => dispatch(fetchFilteredArticlesStart(input)),
  getMoreUnfilteredArticles: (obj) =>
    dispatch(fetchMoreUnfilteredArticles(obj)),
  getMoreFilteredArticles: (obj) => dispatch(fetchMoreFilteredArticles(obj)),
  storeAvailableTags: () => dispatch(storeAvailableTagsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
