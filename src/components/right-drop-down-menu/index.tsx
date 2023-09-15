import { Backdrop, Box, Icon, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import { Dialog } from '@mui/material';
interface RightDropDownMenuProps {
  onClose: () => void;
  open: boolean;
}

const RightDropDownMenu: FC<RightDropDownMenuProps> = ({ onClose, open }) => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          zIndex: 9999,
          maxWidth: "300px",
          width: "100%",
          height: "100vh",
          top: 0,
          transition: "all 5s ease-in-out",
          left: open ? "0px" : "-300px",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "#221f1f",
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
                  color: "#03a9f4",
                  width: "30px",
                  height: "30px",
                }}
              />
            </Icon>
            <Typography
              variant="h3"
              sx={{
                textTransform: "uppercase",
                color: "#fff",
                letterSpacing: "3px",
              }}
            >
              ishop
            </Typography>
          </Box>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: 1000 }}
        open={true}
        onClick={onClose}
      />
    </>
  );
};

export { RightDropDownMenu };
