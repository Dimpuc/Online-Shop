import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../types/products.type";
import { fetchProducts } from "../service/requset-service/actions";

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<{ products: ProductType[] }>({
  products: [],
});

export const useProduct = () => useContext(ProductContext);

const ProductProvider: FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
