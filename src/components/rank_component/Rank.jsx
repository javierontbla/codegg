import React from "react";

import { RankContainer } from "./Rank_styles";

const Rank = ({ badge, rank, top }) => {
  return (
    <>
      <RankContainer rank={rank} top={top}>
        #{badge.toLowerCase()}
      </RankContainer>
    </>
  );
};

export default Rank;
