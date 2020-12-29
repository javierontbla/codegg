import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { roboto, source_sans_pro } = fonts;
const { grey, black, white } = colors;

export const LinkArticle = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const ArticleCardContainer = styled.div`
  width: 100%;
  border: 1px solid ${grey};
  border-radius: 0.35rem;
  transition: box-shadow 0.2s;
  box-shadow: 3px 3px 3px -1px #ced4da;
  background: ${white} !important;

  &:hover {
    cursor: pointer;
    box-shadow: 5.5px 5.5px 5.5px -2.5px #ced4da;
  }
`;

export const ArticleImage = styled.div`
  width: 100%;
  height: 14.5rem;
  border-top-left-radius: 0.305rem;
  border-top-right-radius: 0.305rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
  border-bottom: 0.5px solid ${grey};
`;

export const TopContainer = styled.div`
  height: fit-content;
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const Premium = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.565rem;
  font-family: ${roboto};
  font-weight: 500;
  padding: 0.25rem 0.35rem 0.25rem 0.35rem;
  letter-spacing: 0.5px;
  margin: 0.75rem 0rem 0rem 0.65rem;
  height: fit-content;
  width: fit-content;
  border-radius: 0.15rem;
  line-height: 100%;
  background: transparent;
  color: ${black};
  border: 0.25px solid ${black};

  &:hover {
    cursor: auto;
  }
`;

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 1.6rem;
  color: ${black};
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 110%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.55rem 0.65rem 0.75rem 0.65rem;

  @media (max-width: 500px) {
  }
`;

export const Description = styled.div`
  font-size: 0.9rem;
  font-family: ${roboto};
  color: ${black};
  line-height: 130%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0.65rem 0rem 0.65rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.95rem 0.65rem 0.95rem 0.65rem;
  height: fit-content;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0rem 0rem 0rem 0.75rem;
`;

export const ProfileImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.profile_image_url});
  background-repeat: no-repeat;
`;

export const ProfileName = styled.div`
  font-family: ${source_sans_pro};
  font-size: 1.2rem;
  color: ${black};
  line-height: 100%;
  margin: 0rem 0rem 0.2rem 0rem;
  text-transform: capitalize;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  color: ${grey};
  font-size: 0.685rem;
  font-family: ${roboto};
  font-weight: 500;
  letter-spacing: 0.25px;
  padding: 0;
  margin: 0rem 0rem 0rem 0rem;
  height: fit-content;
  width: 100%;
  line-height: 100%;

  @media (max-width: 500px) {
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.35rem 0.25rem 0.35rem 0.25rem;
  margin: 0rem 0rem 0rem 0rem;
  border-top: 0.5px solid ${grey};

  @media (max-width: 500px) {
  }
`;
