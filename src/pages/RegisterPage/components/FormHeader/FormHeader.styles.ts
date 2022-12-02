import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const StyledText = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

export const Underline = styled.div`
  background-color: rgba(7, 21, 148, 1);
  height: 9px;
  width: 166px;
`;
