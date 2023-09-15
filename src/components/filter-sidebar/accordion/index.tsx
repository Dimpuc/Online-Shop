import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { FC, ReactNode } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionComponentProps {
  label: string;
  children: ReactNode;
}

const AccordionComponent: FC<AccordionComponentProps> = ({
  label,
  children,
}) => {
  return (
    <Accordion
      sx={{
        margin: "0px !important",
      }}
    >
      <AccordionSummary
        sx={{
          margin: "0px",
          minHeight: "0px !important",

          "& .MuiAccordionSummary-content": {
            margin: "8px 0px !important",
          },
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          "&.MuiAccordionDetails-root": {
            padding: "5px 8px",
          },
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export { AccordionComponent };
