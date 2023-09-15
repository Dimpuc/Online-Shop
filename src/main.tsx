import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./providers/ProductsProvider.tsx";
import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/theme/index.ts";

const app = (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </ThemeProvider>
  </StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(app);
