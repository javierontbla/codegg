import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { NavBarContainer, Global } from "./App.styles.js";
import NavBar from "./components/navbar.component/NavBar";
import HomePage from "./pages/home.page/Home.Page";
import PostPage from "./pages/post.page/Post.Page";
import PrivacyPolicy from "./pages/privacy.policy.page/PrivacyPolicy";
import ContactPage from "./pages/contact.page/ContactPage";
import Footer from "./components/footer.component/Footer";
import {
  fetchUnfilteredArticlesStart,
  storeAvailableTagsStart,
} from "./redux/home.page/actions";

const App = ({ getUnfilteredArticles, storeAvailableTags }) => {
  useEffect(() => {
    console.log("FETCHING");
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
          <Route exact path="/" component={HomePage} />
          <Route path="/privacidad" component={PrivacyPolicy} />
          <Route path="/contacto" component={ContactPage} />
          <Route path="/:postId" component={PostPage} />
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
