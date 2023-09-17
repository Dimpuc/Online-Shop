import {
  Box,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { FC } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
        paddingBottom: "10px",
        paddingTop: "10px",
        borderBottom: "1px solid #e9e9e9",
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
            gap: "16px",
          }}
        >
          <Link
            sx={{
              cursor: "pointer",
            }}
          >
            <img src={image} style={{ width: "87px", height: "100px" }} />
          </Link>
          <Box>
            <Link
              sx={{
                cursor: "pointer",
                display: "block",
                marginTop: "8px",
                fontSize: "14px",
                color: "#221f1f",
                textDecoration: "none",
                maxWidth: "600px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {title}
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
          gap: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <IconButton
            disabled={quantity === 1}
            sx={{
              color: "#3e77aa",
              padding: "5px",
              "& .disabled": {
                color: "#d2d2d2",
              },
            }}
          >
            <RemoveIcon
              sx={{
                width: "25px",
                height: "25px",
              }}
            />
          </IconButton>
          <TextField
            value={quantity}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #d2d2d2",
              },
              "& .MuiOutlinedInput-input": {
                padding: "6px !important",
                fontSize: "14px",
                color: "black",
                maxWidth: "50px",
                textAlign: "center",
              },
            }}
          />
          <IconButton
            sx={{
              color: "#3e77aa",
              padding: "5px",
              "& .disabled": {
                color: "#d2d2d2",
              },
            }}
          >
            <AddIcon
              sx={{
                width: "25px",
                height: "25px",
              }}
            />
          </IconButton>
        </Box>
        <Typography
          variant="h4"
          sx={{
            maxWidth: "100px",
            textAlign: "end",
            width: "100%",
          }}
        >{`${quantity * price}$`}</Typography>
      </Box>
    </Box>
  );
};
