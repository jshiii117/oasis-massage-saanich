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
      main: "#CF9A69",
    },
  },
});

export default theme;
