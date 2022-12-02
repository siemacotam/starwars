import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  text-align: left;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const StyledDetailsText = styled.p`
  display: block;
  font-family: ${({ theme }) => theme.fonts.inter};
  font: 100;
  font-style: italic;
  font-size: 20px;
  color: gray;
  line-height: 24px;
`;
