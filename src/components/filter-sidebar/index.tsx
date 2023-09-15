import { Box } from "@mui/material";
import { useProduct } from "../../providers/ProductsProvider";
import { AccordionFilterWithList } from "./accordion-filter-list";

const FilterSidebar = () => {
  const { categories, getSpecificProducts } = useProduct();

  return (
    <Box
      sx={{
        maxWidth: "290px",
        width: "100%",
      }}
    >
      <AccordionFilterWithList
        label="Categories"
        filterList={categories}
        onClick={getSpecificProducts}
      />
    </Box>
  );
};

export { FilterSidebar };
