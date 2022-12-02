import { FormValues } from "src/pages/RegisterPage/RegisterPage.types";

export interface FormPerson {
  name: string;
  created: string;
  vehicles: string[];
}

export interface Person extends FormPerson {
  eye_color: string;
  birth_year: string;
}

export interface FormModel extends FormValues {
  star_wars_data: string;
}
