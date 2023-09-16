import { useModal } from "../../service/hooks/useModal";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { CartList } from "./cart-list";

const Cart = () => {
  const { toggle, ModalComponent } = useModal();
  const { palette } = useTheme();

  return (
    <>
      <IconButton onClick={toggle}>
        <ShoppingCartIcon
          sx={{
            color: "white",
          }}
        />
      </IconButton>
      <ModalComponent>
        <Box
          sx={{
            display: "flex",
            maxWidth: "960px",
            width: "100%",
            height: "auto",
            maxHeight: "100%",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "57px",
              padding: " 0px 24px",
              borderBottom: "1px solid #e9e9e9",
            }}
          >
            <Typography>Cart</Typography>
            <IconButton onClick={toggle}>
              <CloseIcon sx={{ color: palette.secondary.main }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              maxHeight: " 100%",
              position: "relative",
              flexDirection: "column",
              overflowY: "auto",
              padding: " 24px",
            }}
          >
            <Box>
              <CartList />
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
                <Typography>Price</Typography>
                <Button>Buy</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </ModalComponent>
    </>
  );
};

export { Cart };
