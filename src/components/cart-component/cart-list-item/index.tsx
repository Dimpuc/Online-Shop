import { Box, Typography, Link, IconButton, TextField } from "@mui/material";
import { FC } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
interface CartListItemProps {
  image: string;
  title: string;
  quantity: number;
  price: number;
}

export const CartListItem: FC<CartListItemProps> = ({
  image,
  title,
  quantity,
  price,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "30px",
          }}
        >
          <Link>
            <img src={image} style={{ width: "80px", height: "96px" }} />
          </Link>
          <Box>
            <Link>
              <Typography>{title}</Typography>
            </Link>
          </Box>
        </Box>
        <IconButton
          sx={{
            width: "40px",
            height: "40px",
          }}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0px 8px",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="h3">+</Typography>
          <TextField value={quantity} />
          <Typography variant="h3">-</Typography>
        </Box>
        <Typography variant="h4">{`${quantity * price}$`}</Typography>
      </Box>
    </Box>
  );
};
