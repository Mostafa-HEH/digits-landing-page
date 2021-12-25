import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    common: {
      textColor: "#1E266D",
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
    h3: {},
  },
});
