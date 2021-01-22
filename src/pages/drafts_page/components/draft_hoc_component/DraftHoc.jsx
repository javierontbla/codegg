import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

import Draft from "../draft_component/Draft";
import { Container } from "./DraftHoc_styles";
import { request_draft_start_action } from "../../../../redux/drafts_page/actions";

const DraftHoc = ({ request_draft, user_firebase, active_draft }) => {
  const {
    params: { draft_id },
  } = useRouteMatch();

  useEffect(() => {
    document.title = `Codegg - New draft`;
    request_draft({
      user_id: user_firebase.user_data.user_id,
      draft_id,
    });
  }, []);

  return (
    <>
      <Container>
        {active_draft ? (
          <Draft data={active_draft[0]} id={active_draft[1]} />
        ) : null}
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  drafts_page_reducer: { active_draft },
}) => ({
  user_firebase,
  active_draft,
});

const mapDispatchToProps = (dispatch) => ({
  request_draft: (obj) => dispatch(request_draft_start_action(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftHoc);
