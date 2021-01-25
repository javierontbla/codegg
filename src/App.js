import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/navbar_component/NavBar";
import HomePage from "./pages/home_page/HomePage";
import ArticlesPage from "./pages/articles_page/ArticlesPage";
import InvestorsPage from "./pages/investors_page/InvestorsPage";
import ContactPage from "./pages/contact_page/ContactPage";
import PrivacyPage from "./pages/privacy_page/PrivacyPage";
import TermsConditionsPage from "./pages/terms_conditions_page/TermsConditionsPage";
import Footer from "./components/footer_component/Footer";
import {
  log_in_active_user_action_start,
  log_out_active_user_action_start,
} from "./redux/user/actions";
import { auth } from "./firebase/firebase";
import { GlobalStyles, Container, PageContainer } from "./App.styles.js";

const App = ({ log_in_active_user, log_out_active_user }) => {
  let firebase_observer = null;

  useEffect(() => {
    if (
      window.location.hostname === "avgguido.web.app" ||
      window.location.hostname === "avgguido.firebaseapp.com"
    ) {
      window.location.href = "https://codegg.tech/";
    }

    // sign in user
    firebase_observer = auth.onAuthStateChanged((user) => {
      if (user) {
        // when there IS an active user
        log_in_active_user(user); // redux
      } else {
        log_out_active_user();
      }
    });

    return () => {
      firebase_observer(); // close subscription
    };
  }, []);
  return (
    <>
      <GlobalStyles />
      <Container>
        <NavBar />
        <PageContainer>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/articles">
              <ArticlesPage />
            </Route>
            <Route path="/users" component={InvestorsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/privacy" component={PrivacyPage} />
            <Route path="/terms" component={TermsConditionsPage} />
          </Switch>
        </PageContainer>
        <Footer />
      </Container>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  log_in_active_user: (user) => dispatch(log_in_active_user_action_start(user)),
  log_out_active_user: () => dispatch(log_out_active_user_action_start()),
});

export default connect(null, mapDispatchToProps)(App);
