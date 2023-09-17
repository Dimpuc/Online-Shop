import { AppBar, IconButton, Toolbar, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { DropDownMenu } from "../right-drop-down-menu";
import { Cart } from "../cart-component";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { palette } = useTheme();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        sx={{
          display: "flex",
          position: "sticky",
          justifyContent: "center",
          backgroundColor: palette.secondary.main,
          width: "100vw",
          top: "0px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            maxWidth: '1800px',
            justifyContent: "space-between",
          }}
        >
          <IconButton onClick={toggle}>
            <MenuIcon
              sx={{
                color: palette.common.white,
              }}
            />
          </IconButton>
          <Cart />
        </Toolbar>
      </AppBar>
      <DropDownMenu open={open} onClose={toggle} />
    </>
  );
};

export { Header };
