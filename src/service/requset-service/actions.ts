import { ProductType } from "../../types/products.type";
import { getRequset } from "./requset";

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

export { fetchProducts, fetchProductDetails };
