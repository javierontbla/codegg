import React, { useEffect } from "react";
import { connect } from "react-redux";

import ProfileCard from "./components/profile_card_component/ProfileCard";
import OpinionsCard from "./components/opinions_card_component/OpinionsCard";
import TradeCard from "../../components/trade_card_component/TradeCard";
import ArticlePreviewTitle from "./components/article_preview_title_component/ArticlePreviewTitle";
import {
  TraderProfilePageContainer,
  ProfileInformationContainer,
  ProfileCardContainer,
  ProfileOpinionsContainer,
  TimelineContainer,
  TopContainer,
  TradesContainer,
  BottomContainer,
  PostsContainer,
  ArticlesContainer,
} from "./InvestorPage_styles";
import { request_trades_start_action } from "../../redux/investor_page/actions";

const InvestorPage = ({
  match: {
    params: { investor_id },
  },
  trades,
  request_trades,
}) => {
  useEffect(() => {
    request_trades(investor_id);
  }, []);
  return (
    <>
      <TraderProfilePageContainer>
        <ProfileInformationContainer>
          <ProfileCardContainer>
            <ProfileCard />
          </ProfileCardContainer>
          <ProfileOpinionsContainer>
            <OpinionsCard />
          </ProfileOpinionsContainer>
        </ProfileInformationContainer>
        <TimelineContainer>
          <TopContainer>
            <TradesContainer>
              {trades.map((trade_card) => {
                return (
                  <TradeCard
                    data={trade_card[0]}
                    id={trade_card[1]}
                    key={trade_card[1]}
                  />
                );
              })}
            </TradesContainer>
          </TopContainer>
          <BottomContainer>
            <PostsContainer></PostsContainer>
            <ArticlesContainer>
              {[1, 2, 3].map((article_preview_title) => {
                return <ArticlePreviewTitle />;
              })}
            </ArticlesContainer>
          </BottomContainer>
        </TimelineContainer>
      </TraderProfilePageContainer>
    </>
  );
};

// redux
const mapStateToProps = ({ investor_page_reducer: { trades } }) => ({ trades });

const mapDispatchToProps = (dispatch) => ({
  request_trades: (user_id) => dispatch(request_trades_start_action(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvestorPage);
