import StarRateIcon from "@mui/icons-material/StarRate";
import { FC } from "react";

interface StarIconProps {
  isColorFill: boolean;
}

const fillColor = (isColorFill: boolean) => (isColorFill ? "#ffa900" : "grey");

const StarIcon: FC<StarIconProps> = ({ isColorFill = false }) => {
  return (
    <StarRateIcon
      sx={{
        fill: `${fillColor(isColorFill)}`,
        width: "25px",
      }}
    />
  );
};

export { StarIcon };
