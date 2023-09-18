import { lazy } from "react";
import { Box, Grid } from "@mui/material";

import { FilterSidebar } from "../../components/filter-sidebar";
import { CastomLoader } from "../../components/loader";
import { useLoader } from "../../providers/LoaderProvider";

const ProductsList = lazy(() => import("../../components/products-list"));

const CatalogPage = () => {
  const { openLoader } = useLoader();

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          gap: "10px",
          padding: "20px",
        }}
      >
        <FilterSidebar />
        {openLoader ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
              width: "100%",
            }}
          >
            <CastomLoader />
          </Box>
        ) : (
          <ProductsList />
        )}
      </Grid>
    </>
  );
};

export { CatalogPage };
