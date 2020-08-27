import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { NavBarContainer, Global } from "./App.styles.js";
import NavBar from "./components/navbar.component/NavBar";
import HomePage from "./pages/home.page/Home.Page";
import PostPage from "./pages/post.page/Post.Page";
import PrivacyPolicy from "./pages/privacy.policy.page/PrivacyPolicy";
import Footer from "./components/footer.component/Footer";
import {
  fetchUnfilteredArticlesStart,
  storeAvailableTagsStart,
} from "./redux/home.page/actions";

const App = ({
  getUnfilteredArticles,
  unfilteredArticles,
  storeAvailableTags,
  availableTags,
}) => {
  useEffect(() => {
    getUnfilteredArticles();
    storeAvailableTags();
  }, []);

  return (
    <>
      <Global />
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                unfilteredArticles={unfilteredArticles}
                availableTags={availableTags}
              />
            )}
          />
          <Route path="/politica-de-privacidad" component={PrivacyPolicy} />
          <Route path="/:postId" component={PostPage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

// redux
const mapStateToProps = ({
  homePageReducer: { unfilteredArticles, availableTags },
}) => ({
  unfilteredArticles,
  availableTags,
});

const mapDispatchToProps = (dispatch) => ({
  getUnfilteredArticles: () => dispatch(fetchUnfilteredArticlesStart()),
  storeAvailableTags: () => dispatch(storeAvailableTagsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
