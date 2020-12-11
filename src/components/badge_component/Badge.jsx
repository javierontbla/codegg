import React from "react";

import { BadgeContainer } from "./Badge_styles";

const Badge = ({ badge, rank }) => {
  return (
    <>
      <BadgeContainer rank={rank}>{badge.toUpperCase()}</BadgeContainer>
    </>
  );
};

export default Badge;
