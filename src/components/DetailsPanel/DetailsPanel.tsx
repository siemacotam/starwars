import { Person } from "src/global";
import * as S from "./DetailsPanel.styled";

interface DetailsPanelProps {
  person: Person;
}

export const DetailsPanel = ({ person }: DetailsPanelProps): JSX.Element => (
  <S.DetailsContainer>
    <S.StyledDetailsText>
      Date of birth: {person.birth_year}
    </S.StyledDetailsText>
    <S.StyledDetailsText>Eye color: {person.eye_color}</S.StyledDetailsText>
  </S.DetailsContainer>
);
