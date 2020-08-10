import React from "react";
import { Switch, Route } from "react-router-dom";

import { NavBarContainer, Global } from "./App.styles.js";
import NavBar from "./components/navbar.component/NavBar";
import HomePage from "./pages/home.page/Home.Page";
import PostPage from "./pages/post.page/Post.Page";
import Footer from "./components/footer.component/Footer";

const App = () => {
  return (
    <>
      <Global />
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/post" component={PostPage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
