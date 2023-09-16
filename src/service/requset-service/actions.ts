import { CartInterface, CreateCartInterface, ProductType, UserCartInterface } from "../../types/products.type";
import { getRequset, postRequset } from "./requset";


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

const createFakeUser = () => {
  const id = Math.floor(Math.random() * 100);

  sessionStorage.setItem("sessionID", id.toString());

  return {
    id,
  };
};


const fetchProducts = async () => {
  try {
    const data = await getRequset<ProductType[]>({
      url: `${import.meta.env.VITE_API_URL}/products`,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
};

const fetchProductDetails = async (id: number) => {
  try {
    const data = await getRequset<ProductType>({
      url: `${import.meta.env.VITE_API_URL}/products/${id}`,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
};


const fetchAllCategories = async () => {
  try {
    const data = await getRequset<string[]>({
      url: `${import.meta.env.VITE_API_URL}/products/categories`,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
}

const fetchSpecificProducts = async (categorie: string) => {
  try {
    const data = await getRequset<ProductType[]>({
      url: `${import.meta.env.VITE_API_URL}/products/category/${categorie}`,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
}


const createCart = async (body: CreateCartInterface) => {
  try {

    const data = await postRequset<CartInterface>({
      url: `${import.meta.env.VITE_API_URL}/carts`,
      body
    });

    const parseData = parseCartObject({
      id: data.products[0].productId,
      quantity: data.products[0].quantity,
      products: body.allProducts ,
    })

    return {
      id: data.id,
      date: data.date,
      products: parseData
    }
  } catch (err) {
    console.error(err);
  }
}

const getCartById = async (id: number) => {
  try {
    const data = await getRequset<any>({
      url: `${import.meta.env.VITE_API_URL}/carts/${id}`,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
}






export { fetchProducts, fetchProductDetails, fetchAllCategories, fetchSpecificProducts, createCart, getCartById };
