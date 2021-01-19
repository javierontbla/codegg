import React from "react";
import { Route, Switch } from "react-router-dom";

import ArticlesCollection from "./components/articles_collection_component/ArticlesCollection";
import ArticlePage from "../article_page/ArticlePage";
import DraftPage from "../draft_page/DraftPage";
import Draft from "../draft_page/components/draft_component/Draft";
import { Container } from "./ArticlesPage_styles";

const ArticlesPage = ({ match }) => {
  return (
    <>
      <Container className="container">
        <Switch>
          <Route exact path={`${match.path}`}>
            <ArticlesCollection />
          </Route>
          <Route exact path={`${match.path}/draft`}>
            <DraftPage />
          </Route>
          <Route exact path={`${match.path}/:article_id`}>
            <ArticlePage />
          </Route>
          <Route exact path={`${match.path}/draft/:draft_id`}>
            <Draft />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default ArticlesPage;
