import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/es";
import Masonry from "react-masonry-css";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import Thumbnail from "./components/Thumbnail";
import {
  fetchArticlesStart,
  fetchCollectionStart,
  fetchCollectionSuccess,
  fetchMoreArticlesStart,
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
  getArticles,
  articles,
  getSearchedArticles,
  searchedArticles,
  getMoreArticles,
  resetArticles,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchedTags, setSearchedTags] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);
  moment.locale("es");

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const handleInput = (input) => {
    setSearchValue(input);
  };

  const sendQuery = (e) => {
    if (searchedTags.includes(searchValue)) {
      setSearchValue("");
      return;
    }
    if (e.key === "Enter" && searchValue !== "") {
      getSearchedArticles({
        input: searchValue,
        previousArr: searchedArticles,
      });
      setSearchedTags((prev) => [...prev, searchValue]);
      setSearchValue("");
    } else if (e === "click" && searchValue !== "") {
      getSearchedArticles({
        input: searchValue,
        previousArr: searchedArticles,
      });
      setSearchedTags((prev) => [...prev, searchValue]);
      setSearchValue("");
    }
  };

  const sendQueryBtn = (tag) => {
    getSearchedArticles({ input: tag, previousArr: searchedArticles });
    setSearchedTags((prev) => [...prev, tag]);
  };

  const loadMoreArticles = () => {
    getMoreArticles({ lastArticle: articles[1], oldArticles: articles[0] });
  };

  const resetSearch = (tag) => {
    resetArticles([]);
    setSearchedTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <>
      {console.log(searchedArticles)}
      <Time>{moment().format("LL")}</Time>
      <SearchContainer>
        <SearchBox
          value={searchValue}
          type="text"
          placeholder="buscar por tag - p. ej. react, redux, javascript"
          onChange={(e) => handleInput(e.target.value)}
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
                    onClick={() => resetSearch(tag)}
                  />
                </IconContainer>
              </Tag>
            );
          })}
        </Tags>
      ) : null}
      {!loading && searchedArticles.length === 0 ? (
        <>
          <Container>
            <Masonry
              breakpointCols={breakpoints}
              className="mansonry-grid"
              columnClassName="mansonry-grid-column"
            >
              {articles[0].map((article) => {
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
            <LoadMore onClick={() => loadMoreArticles()}>cargar más</LoadMore>
          </ButtonContainer>
        </>
      ) : !loading && searchedArticles.length > 0 ? (
        <>
          <Container>
            <Masonry
              breakpointCols={breakpoints}
              className="mansonry-grid"
              columnClassName="mansonry-grid-column"
            >
              {searchedArticles.map((article) => {
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
            <LoadMore>cargar más</LoadMore>
          </ButtonContainer>
        </>
      ) : null}
    </>
  );
};

// redux
const mapStateToProps = ({
  homePageReducer: { loading, articles, searchedArticles },
}) => ({
  loading,
  articles,
  searchedArticles,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(fetchArticlesStart()),
  getSearchedArticles: (input) => dispatch(fetchCollectionStart(input)),
  getMoreArticles: (obj) => dispatch(fetchMoreArticlesStart(obj)),
  resetArticles: (empty) => dispatch(fetchCollectionSuccess(empty)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
