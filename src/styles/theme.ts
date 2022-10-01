import {DefaultTheme} from "styled-components";

const defaultTheme: DefaultTheme = {
  fontSize: {
    h1: {fontSize: "2rem", lineHeight: "2.5rem"},
    h2: {fontSize: "1.5rem", lineHeight: "2rem"},
    h3: {fontSize: "1rem", lineHeight: "1.5rem"},
    h4: {fontSize: "0.875rem", lineHeight: "1.375rem"},
    h5: {fontSize: "0.75rem", lineHeight: "1rem"},
    h6: {fontSize: "0.5rem", lineHeight: "0.75rem"},
  },
  font: {
    body: "Work Sans",
    optional: "Mulish",
  },
  colors: {
    primary: {
      100: '#E87BF8',
      200: '#8456EC',
      300: '#501FC1',
      400: '#240D57'
    },
    alert: {
      success: '#00805E',
      successAlt: '#D3FFE2',
      danger: '#E61445',
      dangerAlt: '#FFD7E0'
    },
    secondary: {
      100: '#CCB6FF',
      200: '#EDE5FF',
      300: '#CCB6FF'
    },
    neutrals: {
      100: "#BDBDBD",
      200: '#F2F2F2',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#828282',
      600: '#4F4F4F'
    }

  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
  },
  buttonPalette: {
    secondary: {
      background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
      color: "#ffff",
    },
    primary: {
      background: "",
      color: "",
    },
    tertiary: {
      background: "",
      color: "",
    },
  }
};

export default defaultTheme;
