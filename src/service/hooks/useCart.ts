import { useState } from "react";
import { ProductType, UserCartInterface } from "../../types/products.type";
import { useProduct } from "../../providers/ProductsProvider";
import {
  createCart,
  updatedCart,
  updatedQuantity,
} from "../requset-service/actions";
import { useLoader } from "./useLoader";

type RequestBody = {
  id: number;
  pid: number;
};

interface PrepareRequestBodyProps extends RequestBody {
  quantity: number;
  products: ProductType[];
}

interface UpdateCartRequsetProps extends RequestBody {
  cartID: number;
}

const prepareRequestBody = ({
  id,
  pid,
  quantity,
  products,
}: PrepareRequestBodyProps) => {
  return {
    id,
    date: new Date(),
    products: [
      {
        productId: Number(pid),
        quantity,
      },
    ],
    allProducts: products,
  };
};

const useCreateCart = () => {
  const [userCart, setUserCart] = useState<UserCartInterface | null>(null);
  const { products } = useProduct();
  const { onLoad, onFinishLoad } = useLoader();

  const createCartRequset = ({ id, pid }: RequestBody) => {
    onLoad();

    const body = prepareRequestBody({
      id,
      pid,
      quantity: 1,
      products,
    });

    createCart(body).then((res) => {
      if (res) {
        setUserCart(res);
        onFinishLoad();
      }
    });
  };

  const updateCartRequset = ({ id, pid, cartID }: UpdateCartRequsetProps) => {
    if (!userCart) return;

    const quantity = userCart.products.find((p) => p.id === pid)?.quantity;

    const body = prepareRequestBody({
      id,
      pid,
      quantity: quantity ? quantity + 1 : 1,
      products,
    });

    if (userCart?.products.some((p) => p.id === pid)) {
      updatedQuantity({ body, cartID }).then((res) => {
        if (res) {
          setUserCart((prev) => {
            if (!prev?.products) return null;

            const updateProducts = prev.products.map((i) => {
              if (i.id === res.products[0].id) {
                return {
                  ...i,
                  quantity: res.products[0].quantity,
                };
              }
              return i;
            });

            return {
              id: prev?.id,
              date: prev?.date,
              products: updateProducts,
            };
          });
        }
      });
    } else {
      updatedCart({ body, cartID })
        .then((res) => {
          if (res) {
            setUserCart((prev) => {
              if (!prev?.products) return null;
              return {
                id: prev?.id,
                date: prev?.date,
                products: [...prev?.products, ...res.products],
              };
            });
          }
        })
        .catch(console.error);
    }
  };

  return { userCart, createCartRequset, updateCartRequset };
};

export { useCreateCart };
