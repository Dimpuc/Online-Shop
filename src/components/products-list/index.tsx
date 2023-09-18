import { List, ListItem } from "@mui/material";
import { useProduct } from "../../providers/ProductsProvider";
import { ProductType } from "../../types/products.type";
import { ProductItem } from "./product-item";

 const ProductsList = () => {
  const { products } = useProduct();

  return (
    <List
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        maxWidth: "1490px",
        padding: 0,
        width: "100%",
      }}
    >
      {products.map((product: ProductType) => (
        <ListItem
          key={product.id}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            maxWidth: "290px",
            width: "100%",
            padding: "20px",
            boxShadow: "-6px 6px 33px -3px rgba(199,199,199,1)",
            borderRadius: "15px",
          }}
        >
          <ProductItem
            id={product.id}
            image={product.image}
            price={product.price}
            rate={product.rating.rate}
            count={product.rating.count}
            title={product.title}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ProductsList;
