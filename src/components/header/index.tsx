import {
  AppBar,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { routes } from "../../service/route-service/paths";
import { CustomLink } from "../custom-link";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { RightDropDownMenu } from "../right-drop-down-menu";
import "../../index.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.querySelector(":root")?.classList.add("scroll-block");
    } else {
      document.querySelector(":root")?.classList.remove("scroll-block");
    }
  }, [open]);

  return (
    <>
      <AppBar
        sx={{
          display: "flex",
          position: "inherit",
          backgroundColor: "#221f1f",
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
                color: "white",
              }}
            />
          </IconButton>
          {/* <List
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              width: "100%",
              padding: 0,
            }}
          >
            {routes.map(({ label, path }) => (
              <ListItem
                key={path}
                sx={{
                  margin: 0,
                  maxWidth: " max-content",
                  padding: 0,
                }}
              >
                <CustomLink
                  to={path}
                  styles={{ color: "white", textDecoration: "none" }}
                >
                  <Typography>{label}</Typography>
                </CustomLink>
              </ListItem>
            ))}
          </List> */}
        </Toolbar>
      </AppBar>
      {open ? <RightDropDownMenu open={open} onClose={toggle} /> : null}
    </>
  );
};

export { Header };
