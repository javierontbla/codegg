import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { TagContainer, IconContainer, Icon } from "./Tag.styles";
import {
  deleteTagRedux,
  fetchFilteredArticlesSuccess,
} from "../../redux/home.page/actions";

const Tag = ({
  category,
  name,
  on_card,
  deleteTag,
  emptyFilteredArticles,
  filter,
  ...allProps
}) => {
  const removeTag = (category) => {
    // function to remove articles from main array when tag clicked
    deleteTag(category);
    emptyFilteredArticles([]);
  };

  return (
    <>
      <TagContainer on_card={on_card} name={name} {...allProps}>
        #{category}
        <IconContainer filter={filter}>
          <Icon
            icon={faTimes}
            name={category}
            onClick={() => removeTag(category)}
          />
        </IconContainer>
      </TagContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTag: (tag) => dispatch(deleteTagRedux(tag)),
  emptyFilteredArticles: (arr) => dispatch(fetchFilteredArticlesSuccess(arr)),
});

export default connect(null, mapDispatchToProps)(Tag);
