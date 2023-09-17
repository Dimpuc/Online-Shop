import { List, ListItem } from "@mui/material";
import { CartListItem } from "../cart-list-item";
import { useCart } from "../../../providers/CartProvider";

const CartList = () => {
  const { userCart } = useCart();

  return (
    <List>
      {userCart &&
        userCart.products.map((p) => (
          <ListItem key={p.id}>
            <CartListItem
              image={p.image}
              title={p.title}
              price={p.price}
              quantity={p.quantity}
            />
          </ListItem>
        ))}
    </List>
  );
};

export { CartList };
