import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { white, grey, grey_2, black, background } = colors;
const { source_sans_pro, open_sans, roboto } = fonts;

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 15px;
  background: ${black};
`;

export const CoverImageInput = styled.input`
  display: none !important;
`;

export const ProfileImageInput = styled.input`
  display: none !important;
`;

export const CoverImageLabel = styled.label`
  display: none;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  height: 100%;
`;

export const ProfileImageLabel = styled.label`
  display: none;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const TopContainer = styled.div`
  height: fit-content;
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 13.25rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.cover_image});
  background-repeat: no-repeat;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 0.5px solid ${background};

  &:hover ${CoverImageLabel} {
    display: flex;
    cursor: pointer;
  }
`;

export const ProfileImage = styled.div`
  z-index: 1;
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 50%;
  border: 2.5px solid ${black};
  margin: -6.5rem 0rem 0rem 1rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.profile_image});
  background-repeat: no-repeat;

  &:hover ${ProfileImageLabel} {
    display: flex;
    cursor: pointer;
  }
`;

export const RankContainer = styled.div`
  display: flex;
  width: 100;
  height: fit-content;
  margin: 0rem 0rem 0.5rem 0rem;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-family: ${source_sans_pro};
  font-size: 1.9rem;
  color: ${white};
  padding: 0rem 0rem 0rem 0rem;
  line-height: 100%;
  margin: 0rem 0rem 0.25rem 0rem;
  text-transform: capitalize;
  letter-spacing: 0.5px;
`;

export const Username = styled.div`
  font-family: ${open_sans};
  font-size: 0.8rem;
  color: ${grey};
  font-weight: 500;
  margin: 0rem 0rem 0rem 0rem;
  line-height: 100%;
  letter-spacing: 1px;
`;

export const MiddleContainer = styled.div`
  height: fit-content;
  padding: 1.5rem 1.25rem 2rem 1.25rem;
`;

export const Description = styled.div`
  font-size: ${roboto};
  font-size: 1rem;
  color: ${white};
  line-height: 120%;
  margin: 1.5rem 0rem 0rem 0rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  padding: 0.85rem 1.25rem 0.85rem 1.25rem;
  border-top: 0.5px solid ${grey_2};
`;

export const Subscribers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-family: ${roboto};
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 0rem 0rem 0rem 0rem;
  height: fit-content;
  width: fit-content;
  line-height: 100%;
  color: ${grey};
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${grey};
  font-size: 1.75rem;
`;
