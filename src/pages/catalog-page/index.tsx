import { Box, Grid } from "@mui/material";
import { ProductsList } from "../../components/products-list";
import { FilterSidebar } from "../../components/filter-sidebar";
import { CastomLoader } from "../../components/loader";
import { useProduct } from "../../providers/ProductsProvider";

const CatalogPage = () => {
  const { products } = useProduct();

  return (
    <>
      {!products.length ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <CastomLoader />
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
