import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, white, black } = colors;
const { roboto, open_sans } = fonts;

export const CallDashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  border: 1px solid ${grey};
  background: ${white};
  border-radius: 0.25rem;
  height: fit-content;
  width: 100%;
  margin: 0rem 0rem 0.5rem 0rem;
  padding: 0.55rem 0.55rem 0.55rem 0.55rem;
  box-shadow: 1.35px 1.35px 1.35px -1px #ced4da;
`;

export const TitleInputContainer = styled.input`
  width: calc(100% - 6.5rem);
  border: 0.5px solid ${grey};
  padding: 0.35rem 0.5rem 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-family: ${roboto};
  font-size: 0.9rem;
  height: 2.25rem;
  line-height: 100%;
  color: ${black};

  &&& {
    ::placeholder {
      font-size: 1.15rem;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const CreateButton = styled.div`
  display: flex;
  align-items: center;
  line-height: 100%;
  height: 1.75rem;
  width: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 0.15rem;
  font-family: ${open_sans};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${white};
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
