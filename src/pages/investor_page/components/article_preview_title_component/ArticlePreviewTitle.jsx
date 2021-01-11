import React from "react";

import {
  Container,
  ImageContainer,
  TitleContainer,
  TrendsContainer,
  Trends,
  TrendIcon,
  Votes,
} from "./ArticlePreviewTitle_styles";
import UpTrendSVG from "./media/up_button.svg";
import DownTrendSVG from "./media/down_button.svg";

const ArticlePreviewTitle = () => {
  return (
    <>
      <Container>
        <ImageContainer></ImageContainer>
        <TitleContainer>
          facebook is the best investment you can do in 2021
        </TitleContainer>
        <TrendsContainer>
          <Trends>
            <TrendIcon src={UpTrendSVG} />
            <Votes>56</Votes>
            <TrendIcon src={DownTrendSVG} />
          </Trends>
        </TrendsContainer>
      </Container>
    </>
  );
};

export default ArticlePreviewTitle;
