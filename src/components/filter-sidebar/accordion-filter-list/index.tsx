import { FC } from "react";
import { AccordionComponent } from "../accordion";
import { List, ListItem, Button } from "@mui/material";

interface FilterListProps {
  label: string;
  filterList: string[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AccordionFilterWithList: FC<FilterListProps> = ({
  label,
  onClick,
  filterList,
}) => {
  return (
    <AccordionComponent label={label}>
      <List
        sx={{
          padding: 0,
        }}
      >
        {filterList.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              padding: 0,
              margin: "2.5px 0px",
            }}
          >
            <Button
              value={item}
              onClick={(e) => onClick && onClick(e)}
              sx={{
                width: "100%",
                justifyContent: "flex-start",
                padding: "6px 8px",
                color: "black",
                borderRadius: "0",
                textTransform: "inherit",
              }}
            >
              {item}
            </Button>
          </ListItem>
        ))}
      </List>
    </AccordionComponent>
  );
};

export { AccordionFilterWithList };
