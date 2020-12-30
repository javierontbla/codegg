import React from "react";

import { BadgeContainer } from "./Badge_styles";

const Badge = ({ badge, rank, top }) => {
  return (
    <>
      <BadgeContainer rank={rank} top={top}>
        {badge.toLowerCase()}
      </BadgeContainer>
    </>
  );
};

export default Badge;
