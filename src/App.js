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
import CategoriesPage from "./pages/categories_page/CategoriesPage";
import ArticlePage from "./pages/article_page/ArticlePage";
import PrivacyPage from "./pages/privacy_page/PrivacyPage";
import DescriptionPage from "./pages/description_page/DescriptionPage";
import ContactPage from "./pages/contact_page/ContactPage";
import Footer from "./components/footer.component/Footer";
import { storeAvailableTagsStart } from "./redux/home.page/actions";

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
        <NavBarContainer className="container">
          <NavBar />
        </NavBarContainer>
        <MainContainer className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/categorias" component={CategoriesPage} />
            <Route path="/descripcion" component={DescriptionPage} />
            <Route path="/contacto" component={ContactPage} />
            <Route path="/privacidad" component={PrivacyPage} />
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
