import { Backdrop, Box, useTheme } from "@mui/material";
import { FC, useEffect } from "react";

import { Navigation } from "./navigation";
import { DropDownHeader } from "./drop-down-header";
import "../../index.css";

interface DropDownMenuProps {
  onClose: () => void;
  open: boolean;
}

const DropDownMenu: FC<DropDownMenuProps> = ({ onClose, open }) => {
  const { palette } = useTheme();

  useEffect(() => {
    if (open) {
      const root = document.documentElement;

      const el = root.getBoundingClientRect();

      root.style.top = `${el.top}px`;
      root.classList.add("scroll-block");
    }

    return () => {
      const root = document.documentElement;
      root.style.top = '';
      root.classList.remove("scroll-block");
    };
  }, [open]);

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
          top: 0,
          bottom: 0,
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
            zIndex: 5000,
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
