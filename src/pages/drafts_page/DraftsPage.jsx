import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import DraftsDashboard from "./components/drafts_dashboard_component/DraftsDashboard";
import DraftContainer from "./components/draft_container_component/DraftContainer";
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
          <Route path={`${path}/draft/:draft_id`}>
            <DraftContainer />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default DraftsPage;
