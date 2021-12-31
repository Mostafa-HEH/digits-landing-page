import { createTheme } from "@mui/material/styles";

const darkBlue = "#1E266D";
const lightBlue = "#455880";

export default createTheme({
  palette: {
    common: {
      textColor: darkBlue,
      lightBlue: lightBlue,
      lightBlue50: "rgba(69,88,128,0.5)",
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
    h3: {
      color: lightBlue,
      fontSize: ".9em",
      fontWeight: "600",
    },
  },
});
