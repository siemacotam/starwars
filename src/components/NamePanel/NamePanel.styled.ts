import styled from "styled-components";
import { BsPersonPlusFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const StyledName = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 40px;
  flex-grow: 1;
  text-align: center;
  padding: 10px 0px 10px 60px;
  @media (max-width: 768px) {
    padding-left: 0;
    font-size: 25px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 15px;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledAddIcon = styled(BsPersonPlusFill)`
  font-size: 40px;
  color: white;
  width: 40px;
`;

export const StyledCheckedIcon = styled(BsFillCheckCircleFill)`
  color: green;
  font-size: 40px;
  width: 40px;
`;

export const StyledNameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
`;
