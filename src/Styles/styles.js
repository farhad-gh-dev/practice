// Global style variables
export const background = {
  app: "#FFFFFF",
  app_inverse: "#000000",
  placeholder_light: "#e8e8e8",
  placeholder_dark: "#c0c0c0",
};

export const color = {
  primary: "#F33D3D", // Light Red

  lightest: "#FFFFFF",
  darkest: "#000000",

  positive: "#F33D3D",
  negative: "#0BDA51",
  warning: "#FFA800",
};

export const typography = {
  type: {
    primary: '"Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  weight: {
    regular: "400",
    medium: "500",
    semi_bold: "600",
    bold: "700",
    extra_bold: "800",
  },
  size: {
    text_10: "0.625rem",
    text_12: "0.75rem",
    text_14: "0.875rem",
    text_16: "1rem",
    text_18: "1.125rem",
    text_20: "1.25rem",
    text_22: "1.375rem",
    text_24: "1.5rem",
    text_26: "1.625rem",
    text_28: "1.75rem",
    text_30: "1.875rem",
    text_32: "2rem",
  },
};

export const breakpoint = {
  laptopScreen: 1280,
  largeScreen: 1920,
};

export const themes = {
  light: {
    name: "light",
    color: {
      default_background: "#FFFFFF",
      app_background: "rgba(0, 0, 0, 0.05)",
      inverse_background: "#000000",
      primary: "#F33D3D", // Light Red

      lightest: "#FFFFFF",
      darkest: "#000000",

      text: "#000000",

      positive: "#F33D3D",
      negative: "#0BDA51",
      warning: "#FFA800",
    },
  },
  dark: {
    name: "dark",
    color: {
      default_background: "#000000",
      app_background: "rgba(0, 0, 0, 0.90)",
      inverse_background: "#FFFFFF",
      primary: "#F33D3D", // Light Red

      lightest: "#FFFFFF",
      darkest: "#000000",

      text: "#ffffff",

      positive: "#F33D3D",
      negative: "#0BDA51",
      warning: "#FFA800",
    },
  },
};
