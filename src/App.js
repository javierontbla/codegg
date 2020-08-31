import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { NavBarContainer, Global } from "./App.styles.js";
import NavBar from "./components/navbar.component/NavBar";
import HomePage from "./pages/home.page/Home.Page";
import ArticlePage from "./pages/article.page/Article.Page";
import PrivacyPolicy from "./pages/privacy.policy.page/PrivacyPolicy";
import ContactPage from "./pages/contact.page/ContactPage";
import Footer from "./components/footer.component/Footer";
import {
  fetchUnfilteredArticlesStart,
  storeAvailableTagsStart,
} from "./redux/home.page/actions";

const App = ({ getUnfilteredArticles, storeAvailableTags }) => {
  useEffect(() => {
    // functions that fire redux-saga actions
    // get intial posts
    getUnfilteredArticles();
    // get tags that can be searched
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
          <Route exact path="/" component={HomePage} />
          <Route path="/privacidad" component={PrivacyPolicy} />
          <Route path="/contacto" component={ContactPage} />
          <Route path="/:articleId" component={ArticlePage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

// redux
const mapDispatchToProps = (dispatch) => ({
  getUnfilteredArticles: () => dispatch(fetchUnfilteredArticlesStart()),
  storeAvailableTags: () => dispatch(storeAvailableTagsStart()),
});

export default connect(null, mapDispatchToProps)(App);
