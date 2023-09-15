import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../types/products.type";
import {
  fetchAllCategories,
  fetchProducts,
  fetchSpecificProducts,
} from "../service/requset-service/actions";

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
    fetchProducts().then((data) => {
      if (data) {
        setProducts(data);
      }
    });
  }, []);

  useEffect(() => {
    fetchAllCategories().then((data) => {
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
      fetchSpecificProducts(categorie).then((data) => {
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
