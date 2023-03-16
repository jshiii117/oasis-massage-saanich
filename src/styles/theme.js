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
    testBackground: {
      main: "rgba(0, 153, 255, 0.5)",
    },
  },
});

export default theme;
