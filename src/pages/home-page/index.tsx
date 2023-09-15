import { Grid } from "@mui/material";
import { ProductsList } from "../../components/products-list";

const HomePage = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <ProductsList />
    </Grid>
  );
};

export { HomePage };
