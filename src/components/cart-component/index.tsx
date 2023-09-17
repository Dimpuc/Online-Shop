import { useModal } from "../../service/hooks/useModal";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
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
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: " 0px 24px",
              minHeight: "57px",
              borderBottom: "1px solid #e9e9e9",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              Cart
            </Typography>
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
            <CartList toggle={toggle} />
          </Box>
        </Box>
      </ModalComponent>
    </>
  );
};

export { Cart };
