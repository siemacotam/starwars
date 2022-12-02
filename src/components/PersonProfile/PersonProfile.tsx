import { useAppContext } from "src/hooks";
import {
  DetailsPanel,
  FormButton,
  LoadingComponent,
  NamePanel,
} from "src/components";
import * as S from "./PersonProfile.styled";
import { PersonProfileProps } from "./PersonProfile.types";

export const PersonProfile = ({
  onClick,
  loading,
}: PersonProfileProps): JSX.Element => {
  const { state } = useAppContext();
  const person = state.people[state.people.length - 1];

  return (
    <S.Container>
      {loading || !person ? (
        <LoadingComponent />
      ) : (
        <>
          <S.ProfileContainer>
            <S.ImageContainer>
              <S.StyledImage
                src={"https://picsum.photos/534/383"}
                alt="personimg"
              />
            </S.ImageContainer>
            <S.StyledDataContainer>
              <NamePanel person={person} />
              <DetailsPanel person={person} />
            </S.StyledDataContainer>
          </S.ProfileContainer>
          <S.ButtonContainer>
            <FormButton
              text="next profiles"
              color="green"
              onClick={onClick}
              isLoading={loading}
            />
          </S.ButtonContainer>
        </>
      )}
    </S.Container>
  );
};
