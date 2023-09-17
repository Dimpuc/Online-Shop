import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { CartListItem } from "../cart-list-item";
import { useCart } from "../../../providers/CartProvider";
import { FC } from "react";

interface CartListProps {
  toggle: () => void;
}

const CartList: FC<CartListProps> = ({ toggle }) => {
  const { userCart } = useCart();

  const renderContent = () => {
    if (userCart && userCart.products.length) {
      return (
        <Box>
          <List
            sx={{
              padding: 0,
            }}
          >
            {userCart &&
              userCart.products.map((p) => (
                <ListItem
                  key={p.id}
                  sx={{
                    padding: 0,
                  }}
                >
                  <CartListItem
                    image={p.image}
                    title={p.title}
                    price={p.price}
                    quantity={p.quantity}
                  />
                </ListItem>
              ))}
          </List>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 0px",
              position: "sticky",
              height: "100px",
              backgroundColor: "white",
              bottom: "-24px",
            }}
          >
            <Button
              onClick={toggle}
              sx={{
                color: "#3e77aa",
                backgroundColor: "#f5f5f5",
                boxShadow: "inset 0 0 0 1px #ebebeb",
                fontSize: "16px",
                height: "40px",
                padding: "1px 16px",
                textTransform: "none",
              }}
            >
              Continue shopping
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "24px",
                gap: "20px",
                border: "1px solid #00a046",
                backgroundColor: " #00a0461a",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                1000$
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#00a046",
                  color: "#fff",
                  fontSize: "18px",
                  height: "48px",
                  lineHeight: "48px",
                  textTransform: "none",
                  padding: "0px 25px",
                  textAlign: "center",
                  " &:hover": {
                    backgroundColor: "#00a046",
                  },
                }}
              >
                To order
              </Button>
            </Box>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textTransform: "uppercase",
            }}
          >
            Cart is Empty
          </Typography>
          <Button
            onClick={toggle}
            sx={{
              color: "#3e77aa",
              backgroundColor: "#f5f5f5",
              boxShadow: "inset 0 0 0 1px #ebebeb",
              fontSize: "16px",
              height: "40px",
              padding: "1px 16px",
              textTransform: "none",
            }}
          >
            Continue shopping
          </Button>
        </Box>
      );
    }
  };

  return renderContent();
};

export { CartList };
