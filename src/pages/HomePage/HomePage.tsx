import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { addPerson } from "src/AppContext/Reducers/mainReducer.helpers";
import { Author, FormButton, PersonProfile } from "src/components";
import { ErrorComponent } from "src/components/ErrorComponent";
import { useAppContext } from "src/hooks";
import starwarsService from "src/services/starwars-service";
import * as S from "./HomePage.styled";

export const HomePage = () => {
  const [id, setId] = useState(1);
  const { dispatch } = useAppContext();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getNewPerson = () => setId((state) => state + 1);
  const openRegisterForm = () => navigate("register");

  useEffect(() => {
    const getPerson = async () => {
      try {
        setLoading(true);
        const newPerson = await starwarsService.getPerson(id);
        const data = JSON.parse(newPerson);
        dispatch(addPerson(data));
      } catch {
        setError(true);
      }
      setLoading(false);
    };
    getPerson();
  }, [id]);

  return (
    <S.Container>
      <S.Header>
        <Author />
        <FormButton
          text="formularz rejestracyjny"
          color="gray"
          onClick={openRegisterForm}
          isLoading={false}
        />
      </S.Header>
      {error ? (
        <ErrorComponent />
      ) : (
        <PersonProfile onClick={getNewPerson} loading={loading} />
      )}
    </S.Container>
  );
};
