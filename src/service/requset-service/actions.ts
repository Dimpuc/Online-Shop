import { ProductType } from "../../types/products.type";
import { getRequset } from "./requset";

const fetchProducts = async () => {
  const data = await getRequset<ProductType[]>({
    url: `${import.meta.env.VITE_API_URL}/products`,
  });

  return data;
};

const fetchProductDetails = async (id: number) => {
  const data = await getRequset<ProductType>({
    url: `${import.meta.env.VITE_API_URL}/products/${id}`,
  });

  return data;
};

export {fetchProducts, fetchProductDetails}