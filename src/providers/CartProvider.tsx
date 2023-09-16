import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createCart } from "../service/requset-service/actions";
import { useProduct } from "./ProductsProvider";
import { UserCartInterface } from "../types/products.type";
import { createFakeUser } from "../service/utils";

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<{
  userCart: UserCartInterface | null;
  handleAddProductToCart?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}>({
  userCart: null,
});

export const useCart = () => useContext(CartContext);

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [userCart, setUserCart] = useState<UserCartInterface | null>(null);
  const { products } = useProduct();
  const user = null;

  const createCartRequset = ({ id, pid }: { id: number; pid: number }) => {
    const body = {
      id, // user.id
      date: new Date(),
      products: [
        {
          productId: Number(pid),
          quantity: 1,
        },
      ],
      allProducts: products,
    };

    createCart(body).then((res) => {
      if (res) {
        setUserCart(res);
      }
    });
  };

  const handleAddProductToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { pid } = e.currentTarget.dataset;

    if (!userCart && pid) {
      if (user) {
        createCartRequset({
          id: 0,
          pid: Number(pid),
        });
      } else {
        const sessionUser = createFakeUser();
        createCartRequset({
          id: sessionUser.id,
          pid: Number(pid),
        });
      }
    }
  };

  return (
    <CartContext.Provider value={{ handleAddProductToCart, userCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
