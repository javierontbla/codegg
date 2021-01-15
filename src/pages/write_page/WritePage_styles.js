import styled from "styled-components";

export const Container = styled.div`
  padding: 0rem 0rem 0rem 0rem !important;
`;

export const TitleInput = styled.input`
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
  border: 1px solid black;
  font-size: 2.2rem;
`;

export const HeaderInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
`;

export const BodyInput = styled.input`
  width: 100%;
  font-size: 1rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  border: 1px solid orange;
  background: orange;
  margin: 2rem 0rem 0rem 0rem;
`;

export const ActionButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const InsertAction = styled.div`
  width: fit-content;
  font-size: 1rem;
  border: 1px solid black;
  margin: 0rem 1rem 0rem 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  border: 1px solid black;
  margin: 1rem 0rem 0rem 0rem;
`;

export const CloseIcon = styled.img`
  position: absolute;
  width: 1rem;
  height: 1rem;
  right: 0;
  top: 0;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1rem 0rem 0rem 0rem;
`;
