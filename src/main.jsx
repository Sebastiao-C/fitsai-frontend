import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
