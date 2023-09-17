import {
  CartInterface,
  CreateCartInterface,
  ProductType,
} from "../../types/products.type";
import { getRequset, postRequset, putRequset, putchRequset } from "./requset";

const parseCartObject = ({
  id,
  quantity,
  products,
}: {
  id: number;
  quantity: number;
  products: ProductType[];
}) => {
  const object = products.filter((p) => p.id === id)[0];

  return [
    {
      ...object,
      quantity,
    },
  ];
};

const createCart = async (body: CreateCartInterface) => {
  try {
    const data = await postRequset<CartInterface>({
      url: `${import.meta.env.VITE_API_URL}/carts`,
      body,
    });

    const parseData = parseCartObject({
      id: data.products[0].productId,
      quantity: data.products[0].quantity,
      products: body.allProducts,
    });

    return {
      id: data.id,
      date: data.date,
      products: parseData,
    };
  } catch (err) {
    console.error(err);
  }
};

const getCartById = async (id: number) => {
  try {
    const data = await getRequset<any>({
      url: `${import.meta.env.VITE_API_URL}/carts/${id}`,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
};

const updatedCart = async ({
  cartID,
  body,
}: {
  body: CreateCartInterface;
  cartID: number;
}) => {
  try {
    const data = await putRequset<CartInterface>({
      url: `${import.meta.env.VITE_API_URL}/carts/${cartID}`,
      body,
    });

    const parseData = parseCartObject({
      id: data.products[0].productId,
      quantity: data.products[0].quantity,
      products: body.allProducts,
    });

    return {
      id: data.id,
      date: data.date,
      products: parseData,
    };
  } catch (err) {
    console.error(err);
  }
};

const updatedQuantity = async ({
  cartID,
  body,
}: {
  body: CreateCartInterface;
  cartID: number;
}) => {
  try {
    const data = await putchRequset<CartInterface>({
      url: `${import.meta.env.VITE_API_URL}/carts/${cartID}`,
      body,
    });

    const parseData = parseCartObject({
      id: data.products[0].productId,
      quantity: data.products[0].quantity,
      products: body.allProducts,
    });

    console.log(data);

    return {
      id: data.id,
      date: data.date,
      products: parseData,
    };
  } catch (err) {
    console.error(err);
  }
};

export const cartActions = {
  updatedQuantity,
  updatedCart,
  getCartById,
  createCart,
};
