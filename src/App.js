import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import {
  NavBarContainer,
  Global,
  FullContainer,
  MainContainer,
} from "./App.styles.js";
import NavBar from "./components/navbar.component/NavBar";
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

const App = ({ storeAvailableTags }) => {
  useEffect(() => {
    if (
      window.location.hostname === "avgguido.web.app" ||
      window.location.hostname === "avgguido.firebaseapp.com"
    ) {
      window.location.href = "https://codegg.tech/";
    }
    storeAvailableTags();
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
});

export default connect(null, mapDispatchToProps)(App);
