import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import DraftsDashboard from "./components/drafts_dashboard_component/DraftsDashboard";
import DraftHoc from "./components/draft_hoc_component/DraftHoc";
import { Container } from "./DraftPage_styles";

const DraftsPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Container>
        <Switch>
          <Route exact path={`${path}`}>
            <DraftsDashboard />
          </Route>
          <Route path={`${path}/:draft_id`}>
            <DraftHoc />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default DraftsPage;
