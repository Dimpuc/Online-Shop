import { AppBar, List, ListItem, Toolbar, Typography } from "@mui/material";
import { routes } from "../../service/route-service/paths";
import { CustomLink } from "../custom-link";

const Header = () => {
  return (
    <AppBar
      sx={{
        display: "flex",
        position: "inherit",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
        }}
      >
        <List
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
        </List>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
