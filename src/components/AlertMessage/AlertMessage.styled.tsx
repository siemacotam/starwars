import styled from "styled-components";
import { AiOutlineWarning } from "react-icons/ai";

export const StyledEmptyStateComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  padding: 30px;
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const StyledIcon = styled(AiOutlineWarning)`
  font-size: 1.5rem;
`;

export const StyledText = styled.p`
  margin-left: 1rem;
`;
