import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Portfolio from "./components/portfolio_component/Portfolio";
import ProfileCard from "./components/profile_card_component/ProfileCard";
import TradeCard from "../../components/trade_card_component/TradeCard";
import PostCard from "../../components/post_card_component/PostCard";
import ArticlePreviewTitle from "./components/article_preview_title_component/ArticlePreviewTitle";
import {
  InvestorPageContainer,
  LeftContainer,
  ProfileCardContainer,
  RequestButton,
  User,
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
  request_user_articles_start_action,
} from "../../redux/investor_page/actions";

const InvestorPage = ({
  match: {
    params: { user_id },
  },
  request_investor_profile,
  request_trades,
  request_posts,
  request_articles,
  investor,
  trades,
  posts,
  articles,
}) => {
  const [display_portfolio, set_display_portfolio] = useState(false);

  useEffect(() => {
    request_trades(user_id);
    request_posts(user_id);
    request_articles({ user_id });
    request_investor_profile(user_id);
  }, []);

  const handle_display_portfolio = (display) => {
    set_display_portfolio(display);
  };

  return (
    <>
      <InvestorPageContainer>
        <LeftContainer>
          <ProfileCardContainer>
            {investor.length > 0 ? (
              <ProfileCard data={investor[0]} id={investor[1]} />
            ) : null}
          </ProfileCardContainer>
          <RequestButton>
            {investor.length > 0
              ? `Want to get reviewed by ${investor[0].user}?`
              : null}
          </RequestButton>
        </LeftContainer>
        {display_portfolio ? (
          <Portfolio
            handle_display_portfolio={() => handle_display_portfolio(false)}
          />
        ) : null}
        <RightContainer display_portfolio={display_portfolio}>
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
              {articles.map((article_preview_title) => {
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
  investor_page_reducer: { investor, trades, posts, articles },
}) => ({
  investor,
  trades,
  posts,
  articles,
});

const mapDispatchToProps = (dispatch) => ({
  request_investor_profile: (user_id) =>
    dispatch(request_investor_profile_start_action(user_id)),
  request_trades: (user_id) => dispatch(request_trades_start_action(user_id)),
  request_posts: (user_id) => dispatch(request_posts_start_action(user_id)),
  request_articles: (user_id) =>
    dispatch(request_user_articles_start_action(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvestorPage);
