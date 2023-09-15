import { List, ListItem, Typography, Icon, useTheme } from "@mui/material";
import { CustomLink } from "../../custom-link";
import { routes } from "../../../service/route-service/paths";
import { FC } from "react";

interface NavigationProps {
  onClose: () => void;
}

const Navigation: FC<NavigationProps> = ({ onClose }) => {
  const { palette } = useTheme();

  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "10px",
      }}
    >
      {routes.map(({ label, path, icon }) => (
        <ListItem
          key={path}
          onClick={onClose}
          sx={{
            height: "48px",
            padding: 0,
            borderBottom: `1px solid ${palette.grey[300]}`,
            cursor: "pointer",
            ":hover": {
              backgroundColor: palette.info.light,
              transition: ".2s ease-in-out",
              borderRadius: "10px 10px 5px 5px",
              opacity: 1,
            },
          }}
        >
          <CustomLink
            to={path}
            styles={{
              display: "flex",
              alignItems: "flex-end",
              gap: "20px",
              color: palette.common.black,
              textDecoration: "none",
              width: "100%",
              padding: "8px 16px",
            }}
          >
            <Icon
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#221f1f",
              }}
            >
              {icon}
            </Icon>
            <Typography variant="h6">{label}</Typography>
          </CustomLink>
        </ListItem>
      ))}
    </List>
  );
};

export { Navigation };
