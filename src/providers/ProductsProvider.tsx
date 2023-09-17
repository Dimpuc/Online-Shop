import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../types/products.type";
import { productActions } from "../service/requset-service/products-actions";

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<{
  products: ProductType[];
  categories: string[];
  getSpecificProducts?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}>({
  products: [],
  categories: [],
});

export const useProduct = () => useContext(ProductContext);

const ProductProvider: FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCaregories] = useState<string[]>([]);

  useEffect(() => {
    productActions.fetchProducts().then((data) => {
      if (data) {
        setProducts(data);
      }
    });
  }, []);

  useEffect(() => {
    productActions.fetchAllCategories().then((data) => {
      if (data) {
        setCaregories(data);
      }
    });
  }, []);

  const getSpecificProducts = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const categorie = e.currentTarget.value;

    if (categorie) {
      productActions.fetchSpecificProducts(categorie).then((data) => {
        if (data) {
          setProducts(data);
        }
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, categories, getSpecificProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
