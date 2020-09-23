import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { NavBarContainer, Global } from "./App.styles.js";
import NavBar from "./components/navbar.component/NavBar";
import HomePage from "./pages/home.page/Home.Page";
import ArticlePage from "./pages/article.page/Article.Page";
import PrivacyPolicy from "./pages/privacy.policy.page/PrivacyPolicy";
import FeedbackPage from "./pages/feedback.page/FeedbackPage";
import Footer from "./components/footer.component/Footer";
import { storeAvailableTagsStart } from "./redux/home.page/actions";

const App = ({ storeAvailableTags }) => {
  useEffect(() => {
    if (
      window.location.hostname == "avgguido.web.app" ||
      window.location.hostname == "avgguido.firebaseapp.com"
    ) {
      window.location.href = "https://codegg.tech/";
    }
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
          <Route path="/feedback" component={FeedbackPage} />
          <Route path="/:articleId" component={ArticlePage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  storeAvailableTags: () => dispatch(storeAvailableTagsStart()),
});

export default connect(null, mapDispatchToProps)(App);
