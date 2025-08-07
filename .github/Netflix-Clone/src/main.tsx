// CSS Imports for Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Global Custom CSS (if any)
import "./CustomClassNameSetup";

// React & Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// App Setup
import store from "./store";
import { extendedApi } from "./store/slices/configuration";
import palette from "./theme/palette";
import router from "./routes";
import MainLoadingScreen from "./components/MainLoadingScreen";

// Initialize Configuration from RTK Query
store.dispatch(extendedApi.endpoints.getConfiguration.initiate(undefined));

// MUI Theme
const theme = createTheme({ palette });

// Render the app
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider
          router={router}
          fallbackElement={<MainLoadingScreen />}
        />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
