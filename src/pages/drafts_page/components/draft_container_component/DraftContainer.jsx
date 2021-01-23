import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

import Draft from "../draft_component/Draft";
import { Container } from "./DraftContainer_styles";
import {
  request_draft_start_action,
  create_draft_success_action,
  request_draft_success_action,
} from "../../../../redux/drafts_page/actions";

const DraftContainer = ({
  request_draft,
  reset_draft,
  reset_draft_id,
  user_firebase,
  draft,
}) => {
  const {
    params: { user_id, draft_id },
  } = useRouteMatch();

  useEffect(() => {
    if (user_firebase) {
      if (user_firebase.user_id == user_id) {
        request_draft({
          user_id: user_firebase.user_data.user_id,
          draft_id,
        });
      }
    }

    return () => {
      reset_draft_id(null);
      reset_draft(null);
    };
  }, [user_firebase]);

  return (
    <>
      <Container>
        {draft ? <Draft data={draft[0]} id={draft[1]} /> : null}
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  drafts_page_reducer: { draft },
}) => ({
  user_firebase,
  draft,
});

const mapDispatchToProps = (dispatch) => ({
  request_draft: (obj) => dispatch(request_draft_start_action(obj)),
  reset_draft_id: (draft_id) => dispatch(create_draft_success_action(draft_id)),
  reset_draft: (bool) => dispatch(request_draft_success_action(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftContainer);
