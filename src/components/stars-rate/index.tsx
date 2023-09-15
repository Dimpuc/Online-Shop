import { Box } from "@mui/material";
import { FC } from "react";
import { StarIcon } from "./start-icon";

interface StarRatingProps {
  totalStarts?: number;
  rate: number;
}

const StarRating: FC<StarRatingProps> = ({ totalStarts = 5, rate = 0 }) => {
  const starts = Array(totalStarts).fill(null);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {starts.map((_, i) => (
        <StarIcon key={i} isColorFill={rate >= i + 1} />
      ))}
    </Box>
  );
};

export { StarRating };
