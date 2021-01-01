import React from "react";

import {
  LoadingLatestTradesContainer,
  TradeCard,
} from "./LoadingLatestTrades_styles";

const LoadingLatestTrades = () => {
  return (
    <>
      <LoadingLatestTradesContainer>
        {[1, 2, 3].map((trade_card) => {
          return <TradeCard trade_card={trade_card} key={trade_card} />;
        })}
      </LoadingLatestTradesContainer>
    </>
  );
};

export default LoadingLatestTrades;
