import { colors } from "src/Theme/colors";

export const buttonColor = (variant: string) => {
  switch (variant) {
    case "green":
      return `
      background-color: ${colors.green};
      `;
    case "gray":
      return `
      background-color: ${colors.formButton};
      `;
    default:
      return "";
  }
};
