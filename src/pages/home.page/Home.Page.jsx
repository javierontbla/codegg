import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/es";
import Masonry from "react-masonry-css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import Thumbnail from "./components/Thumbnail";
import {
  fetchUnfilteredArticlesStart,
  fetchFilteredArticlesStart,
  fetchMoreUnfilteredArticles,
  fetchMoreFilteredArticles,
  fetchFilteredArticlesSuccess,
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
  unfilteredArticles,
  filteredArticles,
  updateArticles,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedTags, setSearchedTags] = useState([]);

  useEffect(() => {
    getUnfilteredArticles();
    moment.locale("es");
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  const sendQuery = (e) => {
    if (searchedTags.includes(searchInput)) {
      setSearchInput("");
      return;
    } else {
      if (e.key === "Enter" && searchInput !== "") {
        getFilteredArticles({
          input: searchInput,
          previousArticles: filteredArticles,
        });
        setSearchedTags((prev) => [...prev, searchInput]);
        setSearchInput("");
      } else if (e === "click" && searchInput !== "") {
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
    getFilteredArticles({ input: tag, previousArticles: filteredArticles });
    setSearchedTags((prev) => [...prev, tag]);
  };

  const loadMoreUnfilteredArticles = () => {
    getMoreUnfilteredArticles({
      lastArticle: unfilteredArticles[1],
      previousArticles: unfilteredArticles[0],
    });
  };

  const loadMoreFilteredArticles = () => {
    console.log("FILTERED");
  };

  const removeTag = (tag) => {
    // function to remove articles from main array when tag clicked
    const updatedTags = filteredArticles.filter(
      (element) => !element[0]["tags"].includes(tag)
    );
    updateArticles(updatedTags);
    setSearchedTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <>
      <Time>{moment().format("LL")}</Time>
      <SearchContainer>
        <SearchBox
          value={searchInput}
          type="text"
          placeholder="buscar por tag - p. ej. react, redux, javascript"
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
      {!loading && filteredArticles.length === 0 ? (
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
      ) : !loading && filteredArticles.length > 0 ? (
        <>
          <Container>
            <Masonry
              breakpointCols={breakpoints}
              className="mansonry-grid"
              columnClassName="mansonry-grid-column"
            >
              {filteredArticles.map((article) => {
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
            <LoadMore onClick={() => loadMoreFilteredArticles()}>
              cargar más
            </LoadMore>
          </ButtonContainer>
        </>
      ) : null}
    </>
  );
};

// redux
const mapStateToProps = ({
  homePageReducer: { loading, unfilteredArticles, filteredArticles },
}) => ({
  loading,
  unfilteredArticles,
  filteredArticles,
});

const mapDispatchToProps = (dispatch) => ({
  getUnfilteredArticles: () => dispatch(fetchUnfilteredArticlesStart()),
  getFilteredArticles: (input) => dispatch(fetchFilteredArticlesStart(input)),
  getMoreUnfilteredArticles: (obj) =>
    dispatch(fetchMoreUnfilteredArticles(obj)),
  getMoreFilteredArticles: (obj) => dispatch(fetchMoreFilteredArticles(obj)),
  updateArticles: (arr) => dispatch(fetchFilteredArticlesSuccess(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
