import { List, ListItem } from "@mui/material";
import { useProduct } from "../../../providers/ProductsProvider";
import { CartListItem } from "../cart-list-item";

const CartList = () => {
  const { products } = useProduct();
  return (
    <List>
      {products.map((p) => (
        <ListItem>
          <CartListItem image={p.image} title={p.title} />
        </ListItem>
      ))}
    </List>
  );
};

export { CartList };
