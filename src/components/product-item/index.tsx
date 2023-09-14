import { Box, Icon, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import styled from "@mui/styled-engine";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
interface ProductItemProps {
  id: number;
  image: string;
  price: number;
  rate: number;
  count: number;
  title: string;
}

const ProductItem: FC<ProductItemProps> = ({
  id,
  image,
  price,
  rate,
  count,
  title,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
          height: "295px",
        }}
      >
        <StyledMainImage src={image} alt="icon" />
      </Box>
      <Box>
        <Typography
          sx={{
            maxWidth: "260px",
            maxHeight: "48px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <Box>{rate}</Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>{`${price}$`}</Typography>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography>{count ? "Ready to deliver" : ""}</Typography>
          <Icon
            sx={{
              display: "flex",
            }}
          >
            <LocalShippingIcon />
          </Icon>
        </Box>
      </Box>
    </Box>
  );
};

const StyledMainImage = styled("img")`
  max-width: 225px;
  max-height: 295px;
`;

export { ProductItem };
