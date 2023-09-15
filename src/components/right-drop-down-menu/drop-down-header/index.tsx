import { FC } from "react";
import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";

interface DropDownHeaderProps {
  onClose: () => void;
}

const DropDownHeader: FC<DropDownHeaderProps> = ({ onClose }) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: palette.secondary.main,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: "15px",
        }}
      >
        <Icon
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DirectionsBoatIcon
            sx={{
              color: palette.info.main,
              width: "30px",
              height: "30px",
            }}
          />
        </Icon>
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            color: palette.common.white,
            letterSpacing: "3px",
          }}
        >
          ishop
        </Typography>
      </Box>
      <IconButton onClick={onClose}>
        <CloseIcon sx={{ color: palette.common.white }} />
      </IconButton>
    </Box>
  );
};

export { DropDownHeader };
