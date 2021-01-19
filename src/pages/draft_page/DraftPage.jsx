import React, { useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Container } from "./DraftPage_styles";
import { create_draft_start_action } from "../../redux/draft_page/actions";

const DraftPage = ({ match, create_draft, active_user_database, draft_id }) => {
  useEffect(() => {
    document.title = `Codegg - Write your next article`;
    create_draft(active_user_database.user_data.user_id);
  }, []);

  return (
    <>
      <Container>
        {draft_id ? (
          <Redirect from={`${match.path}`} to={`${match.path}/${draft_id}`} />
        ) : null}
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { active_user_database },
  draft_page_reducer: { draft_id },
}) => ({
  draft_id,
  active_user_database,
});

const mapDispatchToProps = (dispatch) => ({
  create_draft: (user_id) => dispatch(create_draft_start_action(user_id)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DraftPage)
);
