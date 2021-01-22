import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ArticlesCollection from "./components/articles_collection_component/ArticlesCollection";
import ArticlePage from "../article_page/ArticlePage";
import ArticlesDashboard from "./components/articles_dashboard_component/ArticlesDashboard";
import ArticleDraft from "./components/article_draft_component/ArticleDraft";
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
          <Route exact path={`${path}/dashboard`}>
            <ArticlesDashboard />
          </Route>
          <Route exact path={`${path}/:article_id`}>
            <ArticlePage />
          </Route>
          <Route exact path={`${path}/dashboard/:draft_id`}>
            <ArticleDraft />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default ArticlesPage;
