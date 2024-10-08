export const pxToRem = (px: number) =>
  `${px / parseInt(fontSize.default, 10)}rem`;

export const fontSize = {
  default: "16px",
};

export const borderRadius = {
  default: "10px",
  small: "5px",
  large: "15px",
};

export const breakPointsValues = {
  small: 576,
  medium: 768,
  large: 1024,
  extraLarge: 1200,
};

export const uiColors = {
  backgroundColor: "#F5EDED",
  primaryColor: "#604CC3",
};

export const breakPoints = {
  small: `max-width: ${pxToRem(breakPointsValues.small)}`,
  medium: `max-width: ${pxToRem(breakPointsValues.medium)}`,
  large: `max-width: ${pxToRem(breakPointsValues.large)}`,
  extraLarge: `max-width: ${pxToRem(breakPointsValues.extraLarge)}`,
};
