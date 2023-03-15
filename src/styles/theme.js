import { createTheme } from "@mui/system";
import "../index.css";

const theme = createTheme({
  typography: {
    fontFamily: {
      optimaLight: "OptimaLight",
      helvetica: ["Helvetica", "Arial", "sans-serif"],
    },
  },
  palette: {
    primary: {
      main: "#8B5E3C",
    },
    secondary: {
      main: "#f50057",
    },
    testBackground: {
      main: "#00ff00",
    },
  },
});

export default theme;
