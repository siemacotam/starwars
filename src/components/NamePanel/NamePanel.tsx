import { Person } from "src/global";
import * as S from "./NamePanel.styled";

interface NamePanelProps {
  person: Person;
}

export const NamePanel = ({ person }: NamePanelProps): JSX.Element => (
  <S.StyledNameContainer>
    <S.StyledName>{person.name}</S.StyledName>
    <S.ButtonsContainer>
      <S.StyledAddIcon />
      <S.StyledCheckedIcon />
    </S.ButtonsContainer>
  </S.StyledNameContainer>
);
