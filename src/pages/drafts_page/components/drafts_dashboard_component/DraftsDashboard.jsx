import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch, Redirect } from "react-router-dom";

import Title from "../../../../components/title_component/Title";
import {
  Container,
  DraftsContainer,
  CreateButton,
  Icon,
  DraftCard,
  DraftTitle,
  HyperLink,
} from "./DraftsDashboard_styles";
import {
  request_drafts_start_action,
  create_draft_start_action,
} from "../../../../redux/drafts_page/actions";
import AddIconSVG from "./media/add_button.svg";

const DraftsDashboard = ({
  request_drafts,
  create_draft,
  user_firebase,
  draft_id,
  drafts,
}) => {
  const {
    url,
    params: { user_id },
  } = useRouteMatch();

  useEffect(() => {
    document.title = `Codegg - Dashboard`;
    if (user_firebase) {
      if (user_firebase.user_id === user_id) request_drafts({ user_id }); // runs twice
    }
  }, [user_firebase]);

  const create_draft_to_firebase = () => {
    const { user_id, user, profile_image } = user_firebase.user_data;

    create_draft({
      user_id,
      user,
      profile_image,
      title: "",
      description: "",
      content: [],
      tags: [],
      draft_image: "",
    });
  };

  return (
    <>
      {draft_id ? <Redirect to={`${url}/draft/${draft_id}`} /> : null}
      <Container>
        <Title title="Drafts" />
        <DraftsContainer>
          <CreateButton onClick={() => create_draft_to_firebase()}>
            <Icon src={AddIconSVG} />
          </CreateButton>
          {drafts.map((article_draft, indx) => {
            return (
              <HyperLink to={`${url}/draft/${article_draft[1]}`}>
                <DraftCard id={article_draft[1]} key={article_draft[1]}>
                  <DraftTitle>
                    {article_draft[0].title.length > 0
                      ? article_draft[0].title
                      : `Untitled_${indx + 1}`}
                  </DraftTitle>
                </DraftCard>
              </HyperLink>
            );
          })}
        </DraftsContainer>
      </Container>
    </>
  );
};

const mapStateToProps = ({
  user_reducer: { user_firebase },
  articles_page_reducer: { draft_id, drafts },
}) => ({
  user_firebase,
  drafts,
  draft_id,
});

const mapDispatchToProps = (dispatch) => ({
  request_drafts: (user_id) => dispatch(request_drafts_start_action(user_id)),
  create_draft: (user_id) => dispatch(create_draft_start_action(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftsDashboard);
