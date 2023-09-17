import { Box, Grid } from "@mui/material";
import { ProductsList } from "../../components/products-list";
import { FilterSidebar } from "../../components/filter-sidebar";
import { CastomLoader } from "../../components/loader";
import { useProduct } from "../../providers/ProductsProvider";
import { useLoader } from "../../service/hooks/useLoader";

const CatalogPage = () => {
  const { products } = useProduct();
  const { component, loading } = useLoader();

  console.log(loading);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          {component()}
        </Box>
      ) : (
        <Grid
          sx={{
            display: "flex",
            gap: "10px",
            padding: "20px",
          }}
        >
          <FilterSidebar />
          <ProductsList />
        </Grid>
      )}
    </>
  );
};

export { CatalogPage };
