import { useState } from "react";
import { ProductType, UserCartInterface } from "../../types/products.type";
import { useProduct } from "../../providers/ProductsProvider";
import { cartActions } from "../requset-service/cart-actions";
import { useLoader } from "../../providers/LoaderProvider";

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
  const { onOpenLoaderWithbackdrop, onCloseLoaderWithbackdrop } = useLoader();

  const createCartRequset = ({ id, pid }: RequestBody) => {
    onOpenLoaderWithbackdrop();

    const body = prepareRequestBody({
      id,
      pid,
      quantity: 1,
      products,
    });

    cartActions.createCart(body).then((res) => {
      if (res) {
        setUserCart(res);
        onCloseLoaderWithbackdrop();
      }
    });
  };

  const updateCartRequset = ({
    id,
    pid,
    cartID = Number(userCart?.id),
  }: UpdateCartRequsetProps) => {
    if (!userCart) return;
    onOpenLoaderWithbackdrop();

    const quantity = userCart.products.find((p) => p.id === pid)?.quantity;

    const body = prepareRequestBody({
      id,
      pid,
      quantity: quantity ? quantity + 1 : 1,
      products,
    });

    if (userCart?.products.some((p) => p.id === pid)) {
      cartActions.updatedQuantity({ body, cartID }).then((res) => {
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
          onCloseLoaderWithbackdrop();
        }
      });
    } else {
      cartActions
        .updatedCart({ body, cartID })
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
            onCloseLoaderWithbackdrop();
          }
        })
        .catch(console.error);
    }
  };

  return { userCart, createCartRequset, updateCartRequset };
};

export { useCreateCart };
