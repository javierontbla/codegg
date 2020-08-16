import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/es";
import Masonry from "react-masonry-css";

import Thumbnail from "./components/Thumbnail";
import { fetchArticlesStart } from "../../redux/home.page/actions";
import { Container, Time, LoadMore, ButtonContainer } from "./Home.Page.styles";
import "./Home.Page.css";

const HomePage = ({ loading, getArticles, articles }) => {
  useEffect(() => {
    getArticles();
  }, []);
  moment.locale("es");

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <Time>{moment().format("LL")}</Time>
      {!loading ? (
        <>
          <Container>
            <Masonry
              breakpointCols={breakpoints}
              className="mansonry-grid"
              columnClassName="mansonry-grid-column"
            >
              {articles.map((article) => {
                return (
                  <Thumbnail
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
const mapStateToProps = ({ homePageReducer: { loading, articles } }) => ({
  loading,
  articles,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(fetchArticlesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
