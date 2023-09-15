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

export { fetchProducts, fetchProductDetails, fetchAllCategories, fetchSpecificProducts };
