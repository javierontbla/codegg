import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { CategoryContainer, IconContainer, Icon } from "./Category_styles";
import {
  delete_category_action,
  request_filtered_articles_success_action,
} from "../../redux/articles_page/actions";

const Category = ({
  clear_filtered_articles,
  delete_category,
  category,
  active_category,
  name,
  top,
  article_preview,
  article,
  ...allProps
}) => {
  const remove_category = (category) => {
    // function to remove articles from main array when cross is clicked
    delete_category(category);
    clear_filtered_articles([]);
  };

  return (
    <>
      <CategoryContainer
        name={name}
        {...allProps}
        top={top}
        article_preview={article_preview}
        article={article}
      >
        #{category}
        <IconContainer active_category={active_category}>
          <Icon icon={faTimes} onClick={() => remove_category(category)} />
        </IconContainer>
      </CategoryContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  delete_category: (category) => dispatch(delete_category_action(category)),
  clear_filtered_articles: (empty_arr) =>
    dispatch(request_filtered_articles_success_action(empty_arr)),
});

export default connect(null, mapDispatchToProps)(Category);
