import { Box, Grid } from "@mui/material";
import { ProductsList } from "../../components/products-list";
import { FilterSidebar } from "../../components/filter-sidebar";
import { CastomLoader } from "../../components/loader";
import { useLoader } from "../../providers/LoaderProvider";

const CatalogPage = () => {
  const { openLoader } = useLoader();

  return (
    <>
      {openLoader ? (
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
