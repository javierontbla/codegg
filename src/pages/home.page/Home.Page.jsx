import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/es";

import Thumbnail from "./components/Thumbnail";
import { fetchArticlesStart } from "../../redux/home.page/actions";
import { Container, Time, LoadMore, ButtonContainer } from "./Home.Page.styles";

const HomePage = ({ loading, getArticles, articles }) => {
  useEffect(() => {
    getArticles();
  }, []);
  moment.locale("es");
  return (
    <>
      <Time>{moment().format("LL")}</Time>
      {!loading ? (
        <>
          <Container>
            <Thumbnail article={articles[0][0]} />
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
