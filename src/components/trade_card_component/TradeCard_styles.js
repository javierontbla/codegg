import styled, { css } from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { grey, grey_2, white, black, blue } = colors;
const { montserrat, open_sans, roboto } = fonts;

const InformationStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-family: ${open_sans};
  font-weight: 500;
  padding: 0rem 0rem 0rem 0rem;
  letter-spacing: 0.75px;
  margin: 0rem 0.5rem 0rem 0rem;
  height: fit-content;
  width: fit-content;
  line-height: 100%;
  color: ${grey};

  &:hover {
    cursor: auto;
  }
`;

export const Container = styled.div`
  width: ${(props) => (props.home_page ? "100%" : "18rem")};
  margin: ${(props) =>
    props.home_page ? "0rem 0rem 1.25rem 0rem" : "0rem 0.75rem 0rem 0rem"};
  background: ${black};
  border: none;
  border-radius: 15px;
  transition: box-shadow 0.2s;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: fit-content;
  border-bottom: 0.5px solid ${grey_2};
  padding: 1rem 1rem 1rem 1rem;
`;

export const Name = styled.div`
  font-family: ${montserrat};
  font-size: 1.5rem;
  color: ${white};
  line-height: 100%;
  letter-spacing: 0.5px;
  padding: 0rem 0rem 0rem 0rem;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-wrap: wrap;
  margin: 0.35rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
`;

export const Tag = styled.div`
  ${InformationStyles};
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 1rem 1rem 1.25rem 1rem;
`;

export const ArtistImage = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: none;
  margin: 0rem 0.75rem 0rem 0rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.profile_image_url});
  background-repeat: no-repeat;
`;

export const Description = styled.div`
  font-family: ${roboto};
  font-size: 0.9rem;
  color: ${white};
  line-height: 115%;
  width: calc(100% - 3rem);
  padding: 0rem 0rem 0rem 0rem;
  text-align: left;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  border-top: 0.5px solid ${grey_2};
  padding: 0.2rem 1rem 0.2rem 1rem;
`;

export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: fit-content;
`;

export const TrendIcon = styled.img`
  width: 1.85rem;
  height: 1.85rem;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const Votes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  color: ${white};
  font-size: 0.7rem;
  margin: 0rem 0.4rem 0rem 0.5rem;
  font-family: ${open_sans};
  font-weight: 500;
  letter-spacing: 0.25px;
  opacity: 0.85;
`;

export const Username = styled.div`
  font-family: ${open_sans};
  color: ${grey};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
