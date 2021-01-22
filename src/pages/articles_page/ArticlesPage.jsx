import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ArticlesCollection from "./components/articles_collection_component/ArticlesCollection";
import DraftsPage from "../drafts_page/DraftsPage";
import ArticlePage from "../article_page/ArticlePage";
import { Container } from "./ArticlesPage_styles";

const ArticlesPage = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Container className="container">
        <Switch>
          <Route exact path={`${path}`}>
            <ArticlesCollection />
          </Route>
          <Route path={`${path}/dashboard`}>
            <DraftsPage />
          </Route>
          <Route exact path={`${path}/:article_id`}>
            <ArticlePage />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default ArticlesPage;
