import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Draft from "./components/draft_component/Draft";
import { Container } from "./WritePage_styles";
import { create_draft_start_action } from "../../redux/write_page/actions";

const WritePage = ({ match, create_draft, active_user_database, draft_id }) => {
  useEffect(() => {
    document.title = `Codegg - Write your next article`;
    create_draft(active_user_database.user_data.user_id);
  }, []);

  return (
    <>
      {console.log(draft_id)}
      <Container className="container">
        <Switch>
          <Route exact path={`/${match.path}`}>
            {draft_id ? <Redirect to={`/${match.path}/${draft_id}`} /> : null}
          </Route>
          <Route path={`/${match.path}/:draft_id`} component={Draft} />
        </Switch>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { active_user_database },
  write_page_reducer: { draft_id },
}) => ({
  draft_id,
  active_user_database,
});

const mapDispatchToProps = (dispatch) => ({
  create_draft: (user_id) => dispatch(create_draft_start_action(user_id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WritePage);
