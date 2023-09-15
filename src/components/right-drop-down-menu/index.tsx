import { Backdrop, Box, useTheme } from "@mui/material";
import { FC } from "react";

import { Navigation } from "./navigation";
import { DropDownHeader } from "./drop-down-header";

interface DropDownMenuProps {
  onClose: () => void;
  open: boolean;
}

const DropDownMenu: FC<DropDownMenuProps> = ({ onClose, open }) => {
  const { palette } = useTheme();
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
          transition: "0.5s",
          transform: open ? "translateX(0%)" : "translateX(-100%)",
          backgroundColor: palette.common.white,
        }}
      >
        <DropDownHeader onClose={onClose} />
        <Navigation onClose={onClose} />
      </Box>
      {open && (
        <Backdrop
          sx={{
            color: palette.common.white,
            zIndex: 1000,
            transition:
              "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
          }}
          open={true}
          onClick={onClose}
        />
      )}
    </>
  );
};

export { DropDownMenu };
