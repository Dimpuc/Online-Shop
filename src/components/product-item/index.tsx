import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import styled from "@mui/styled-engine";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { StarRating } from "../stars-rate";

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
  const { palette } = useTheme();

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography
          variant="h4"
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
        <StarRating rate={rate} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">{`${price}$`}</Typography>
          <IconButton
            sx={{
              padding: 0,
            }}
          >
            <AddShoppingCartIcon
              sx={{
                color: `${palette.success.light}`,
              }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: `${palette.success.light}`,
            }}
          >
            {count ? "Ready to deliver" : ""}
          </Typography>
          <Icon
            sx={{
              display: "flex",
              color: `${palette.success.light}`,
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
