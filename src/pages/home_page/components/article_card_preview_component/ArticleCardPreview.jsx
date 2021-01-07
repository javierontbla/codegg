import React from "react";
import moment from "moment";

import ProfileBox from "../../../../components/profile_box_component/ProfileBox";
import Premium from "../../../../components/premium_component/Premium";
import {
  ArticlePreviewContainer,
  LinkContainer,
  ImageContainer,
  TopContainer,
  PremiumContainer,
  Title,
  MiddleContainer,
  BottomContainer,
  Trends,
  Icon,
  Votes,
} from "./ArticleCardPreview_styles";
import UpTrend from "./media/up_button.svg";
import DownTrend from "./media/down_button.svg";

const ArticleCardPreview = ({ data, id }) => {
  moment.locale("es");

  return (
    <>
      <ArticlePreviewContainer>
        <LinkContainer to={`/articles/${id}`}>
          <ImageContainer article_preview_image={data.article_image} />
          <TopContainer>
            <PremiumContainer>
              <Premium />
            </PremiumContainer>
            <Title>{data.title}</Title>
          </TopContainer>
          <MiddleContainer>
            <ProfileBox
              profile_image={data.profile_image}
              user={data.user}
              date={data.date}
              article_card_preview={"true"}
            />
          </MiddleContainer>
        </LinkContainer>
        <BottomContainer>
          <Trends>
            <Icon src={UpTrend} />
            <Votes>{"12"}</Votes>
            <Icon src={DownTrend} />
          </Trends>
        </BottomContainer>
      </ArticlePreviewContainer>
    </>
  );
};

export default ArticleCardPreview;
