import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./providers/ProductsProvider.tsx";
import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/theme/index.ts";
import { CartProvider } from "./providers/CartProvider.tsx";

const app = (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  </StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(app);
