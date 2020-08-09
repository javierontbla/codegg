import React from "react";

import { NavBarContainer, Global } from "./App.styles.js";
import NavBar from "./components/navbar.component/NavBar";
import PostPage from "./pages/post.page/Post.Page.jsx";
import Footer from "./components/footer.component/Footer";

const App = () => {
  return (
    <>
      <Global />
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <div className="container">
        <PostPage />
      </div>
      <Footer />
    </>
  );
};

export default App;
