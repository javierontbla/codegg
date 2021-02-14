import React from "react";
import { connect } from "react-redux";

import { CategoryContainer, IconContainer, Icon } from "./Category_styles";
import {
  delete_category_action,
  request_filtered_articles_success_action,
} from "../../redux/articles_page/actions";
import CloseIconSVG from "./media/delete_button.svg";

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
    clear_filtered_articles({
      filtered_articles: [],
    });
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
        <IconContainer active_category={active_category}>
          <Icon src={CloseIconSVG} onClick={() => remove_category(category)} />
        </IconContainer>
        #{category}
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
