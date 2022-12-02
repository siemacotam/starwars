import { useFormik, FormikProvider } from "formik";
import { initialValues, validationSchema } from "./RegisterPage.const";
import { FormValues } from "./RegisterPage.types";
import * as S from "./RegisterPage.styled";
import { Form, FormHeader } from "./components";
import { useAppContext } from "src/hooks";
import { FormEvent, useEffect, useState } from "react";
import { FormModel } from "src/global";
import starwarsService from "src/services/starwars-service";
import { AlertMessage } from "src/components/AlertMessage";

export const RegisterPage = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  const { state } = useAppContext();
  const { values } = formik;
  const { people } = state;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const data: FormModel = {
      ...values,
      star_wars_data: JSON.stringify(people),
    };
    await starwarsService
      .sendData(data)
      .catch(() => setMsg("Wystąpił problem przy wysyłaniu danych"));

    // formik.resetForm();
    setLoading(false);
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setMsg("");
    }, 2000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [msg]);

  return (
    <S.Container>
      <FormHeader />
      {msg && <AlertMessage text={msg} />}
      <FormikProvider value={formik}>
        <form onSubmit={handleSubmit}>
          <Form />
          <S.ButtonContainer>
            <S.FormButton
              type="submit"
              disabled={loading || !formik.isValid || !values.terms}
            >
              zapisz
            </S.FormButton>
          </S.ButtonContainer>
        </form>
      </FormikProvider>
    </S.Container>
  );
};
