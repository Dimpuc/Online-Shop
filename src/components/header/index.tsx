import { AppBar, IconButton, Toolbar, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { DropDownMenu } from "../right-drop-down-menu";

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
          position: "inherit",
          backgroundColor: palette.secondary.main,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
          }}
        >
          <IconButton onClick={toggle}>
            <MenuIcon
              sx={{
                color: palette.common.white,
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DropDownMenu open={open} onClose={toggle} />
    </>
  );
};

export { Header };
