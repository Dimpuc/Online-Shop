import { CastomLoader } from "..";
import { useLoader } from "../../../providers/LoaderProvider";
import { Backdrop } from "@mui/material";

export const LoaderWithBackdrop = () => {
  const { openWithbackdrop } = useLoader();

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openWithbackdrop}
    >
      <CastomLoader />
    </Backdrop>
  );
};
