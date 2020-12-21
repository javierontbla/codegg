import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/navbar_component/NavBar";
import HomePage from "./pages/home_page/HomePage";
import ArticlesPage from "./pages/articles_page/ArticlesPage";
import CommunityPage from "./pages/community_page/CommunityPage";
import InvestorsPage from "./pages/investors_page/InvestorsPage";
import TraderProfilePage from "./pages/trader_profile_page/TraderProfilePage";
import ContactPage from "./pages/contact_page/ContactPage";
import ArticlePage from "./pages/article_page/ArticlePage";
import PrivacyPage from "./pages/privacy_page/PrivacyPage";
import TermsConditionsPage from "./pages/terms_conditions_page/TermsConditionsPage";
import Footer from "./components/footer_component/Footer";
import { storeAvailableTagsStart } from "./redux/categories_page/actions";
import { store_active_user_action_start } from "./redux/user/actions";
import { auth } from "./firebase";
import {
  NavBarContainer,
  Global,
  FullContainer,
  MainContainer,
} from "./App.styles.js";

const App = ({ store_active_user }) => {
  useEffect(() => {
    if (
      window.location.hostname === "avgguido.web.app" ||
      window.location.hostname === "avgguido.firebaseapp.com"
    ) {
      window.location.href = "https://codegg.tech/";
    }

    // sign in user
    let firebase_auth = auth.onAuthStateChanged((user) => {
      if (user) {
        // when there IS an active user
        store_active_user(user.uid); // redux
      } else {
        // if there is no active user
        console.log("2");
      }
    });

    return () => {
      firebase_auth();
    };
  }, []);
  return (
    <>
      <Global />
      <FullContainer>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <MainContainer>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/articulos" component={ArticlesPage} />
            <Route path="/community" component={CommunityPage} />
            <Route path="/inversionistas" component={InvestorsPage} />
            <Route path="/contacto" component={ContactPage} />
            <Route path="/privacy" component={PrivacyPage} />
            <Route path="/terms" component={TermsConditionsPage} />
            <Route path="/profile-page" component={TraderProfilePage} />
            <Route path="/:articleId" component={ArticlePage} />
          </Switch>
        </MainContainer>
        <Footer />
      </FullContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  storeAvailableTags: () => dispatch(storeAvailableTagsStart()),
  store_active_user: (user_uid) =>
    dispatch(store_active_user_action_start(user_uid)),
});

export default connect(null, mapDispatchToProps)(App);
