import { Grid } from "@mui/material";
import { ProductsList } from "../../components/products-list";
import { FilterSidebar } from "../../components/filter-sidebar";

const HomePage = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        gap: '10px',
        padding: "20px",
      }}
    >
      <FilterSidebar />
      <ProductsList />
    </Grid>
  );
};

export { HomePage };
