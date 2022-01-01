import { createTheme } from "@mui/material/styles";

const darkBlue = "#1E266D";
const lightBlue = "#455880";
const lightBlue50 = "rgba(69,88,128,0.5)";

export default createTheme({
  palette: {
    common: {
      textColor: darkBlue,
      lightBlue: lightBlue,
      lightBlue50: lightBlue50,
    },
    primary: {
      main: "#3751FF",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Open Sans', 'sans-serif'",
    tab: {
      fontSize: ".9rem",
      fontWeight: 600,
      color: "#1E266D",
      textTransform: "none",
    },
    h1: {
      color: darkBlue,
      fontSize: "3em",
      textAlign: "center",
      fontWeight: "600",
    },
    h2: {
      textAlign: "center",
      fontSize: "2.5em",
      fontWeight: "600",
      color: "darkBlue",
    },
    h3: {
      color: lightBlue,
      fontSize: ".9em",
      fontWeight: "600",
    },
    h4: {
      color: lightBlue50,
      fontSize: "1em",
      fontWeight: "600",
    },
    h5: {
      color: darkBlue,
      fontSize: "1.1rem",
      fontWeight: "600",
    },
    body1: {
      color: lightBlue,
      fontWeight: "600",
    },
  },
});
