import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    common: {
      textColor: "#1E266D",
      lightBlue: "#455880",
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
  },
});
