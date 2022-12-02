import { FormValues } from "./RegisterPage.types";
import * as yup from "yup";

export const validationSchema = yup.object({
  login: yup.string().required("Login jest wymagany"),
  password: yup
    .string()
    .min(4, "Hasło musi zawierać conajmniej 4 znaki")
    .required("Hasło wymagane"),
  email: yup
    .string()
    .email("Niepopraweny format adresu email")
    .required("Adres email wymagany"),
  phone: yup
    .string()
    .required("Numer telefonu jest wymagany")
    .min(9, "Za krótki numer")
    .max(9, "Za długi numer"),
  terms: yup.bool().oneOf([true], "Wymagana akceptacja regulaminu"),
});

export const initialValues: FormValues = {
  login: "",
  password: "",
  email: "",
  phone: "",
  terms: false,
};
