import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./providers/ProductsProvider.tsx";
import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/theme/index.ts";
import { CartProvider } from "./providers/CartProvider.tsx";
import { LoaderProvider } from "./providers/LoaderProvider.tsx";

const app = (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LoaderProvider>
        <ProductProvider>
          <CartProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartProvider>
        </ProductProvider>
      </LoaderProvider>
    </ThemeProvider>
  </StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(app);
