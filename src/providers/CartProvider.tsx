import { FC, ReactNode, createContext, useContext } from "react";
import { UserCartInterface } from "../types/products.type";
import { createFakeUser } from "../service/utils";
import { useCreateCart } from "../service/hooks/useCart";

interface CartProviderProps {
  children: ReactNode;
}

const user = null;

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
  const { userCart, createCartRequset, updateCartRequset } = useCreateCart();

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
    } else if (userCart && userCart.id) {
      const userId = sessionStorage.getItem("sessionID");

      updateCartRequset({
        cartID: userCart?.id,
        id: Number(userId),
        pid: Number(pid),
      });
    }
  };

  return (
    <CartContext.Provider value={{ handleAddProductToCart, userCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
