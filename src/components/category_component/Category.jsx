import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { CategoryContainer, IconContainer, Icon } from "./Category_styles";
import {
  deleteTagRedux,
  fetchFilteredArticlesSuccess,
} from "../../redux/categories_page/actions";

const Category = ({
  emptyFilteredArticles,
  deleteTag,
  category,
  filter,
  name,
  top,
  ...allProps
}) => {
  const removeTag = (category) => {
    // function to remove articles from main array when tag clicked
    deleteTag(category);
    emptyFilteredArticles([]);
  };

  return (
    <>
      <CategoryContainer name={name} {...allProps} top={top}>
        #{category}
        <IconContainer filter={filter}>
          <Icon
            icon={faTimes}
            name={category}
            onClick={() => removeTag(category)}
          />
        </IconContainer>
      </CategoryContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTag: (tag) => dispatch(deleteTagRedux(tag)),
  emptyFilteredArticles: (arr) => dispatch(fetchFilteredArticlesSuccess(arr)),
});

export default connect(null, mapDispatchToProps)(Category);
