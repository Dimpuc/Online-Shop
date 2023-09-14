import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./providers/ProductsProvider.tsx";
import { StrictMode } from "react";

const app = (
  <StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  </StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(app);
