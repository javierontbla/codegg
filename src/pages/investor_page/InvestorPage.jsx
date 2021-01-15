import React, { useEffect } from "react";
import { connect } from "react-redux";

import ProfileCard from "./components/profile_card_component/ProfileCard";
import OpinionsCard from "./components/opinions_card_component/OpinionsCard";
import TradeCard from "../../components/trade_card_component/TradeCard";
import PostCard from "../../components/post_card_component/PostCard";
import ArticlePreviewTitle from "./components/article_preview_title_component/ArticlePreviewTitle";
import {
  InvestorPageContainer,
  LeftContainer,
  ProfileCardContainer,
  RightContainer,
  TopContainer,
  TradesContainer,
  Division,
  BottomContainer,
  PostsContainer,
  ArticlesContainer,
} from "./InvestorPage_styles";
import {
  request_investor_profile_start_action,
  request_trades_start_action,
  request_posts_start_action,
} from "../../redux/investor_page/actions";

const InvestorPage = ({
  match: {
    params: { investor_id },
  },
  request_investor_profile,
  request_trades,
  request_posts,
  investor,
  trades,
  posts,
}) => {
  useEffect(() => {
    request_trades(investor_id);
    request_posts(investor_id);
    request_investor_profile(investor_id);
  }, []);
  return (
    <>
      <InvestorPageContainer>
        <LeftContainer>
          <ProfileCardContainer>
            {investor.length > 0 ? (
              <ProfileCard data={investor[0]} id={investor[1]} />
            ) : null}
          </ProfileCardContainer>
        </LeftContainer>
        <RightContainer>
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
          <Division />
          <BottomContainer>
            <PostsContainer>
              {posts.map((post) => {
                return <PostCard data={post[0]} id={post[1]} />;
              })}
            </PostsContainer>
            <ArticlesContainer>
              {[1, 2, 3, 4, 5, 6].map((article_preview_title) => {
                return <ArticlePreviewTitle />;
              })}
            </ArticlesContainer>
          </BottomContainer>
        </RightContainer>
      </InvestorPageContainer>
    </>
  );
};

// redux
const mapStateToProps = ({
  investor_page_reducer: { investor, trades, posts },
}) => ({
  investor,
  trades,
  posts,
});

const mapDispatchToProps = (dispatch) => ({
  request_investor_profile: (user_id) =>
    dispatch(request_investor_profile_start_action(user_id)),
  request_trades: (user_id) => dispatch(request_trades_start_action(user_id)),
  request_posts: (user_id) => dispatch(request_posts_start_action(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvestorPage);
