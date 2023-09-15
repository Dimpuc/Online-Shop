import createTheme from "@mui/material/styles/createTheme";
import { Pallette } from "./palette";
import { Typography } from "./typography";


const theme = createTheme({
    palette: Pallette,
    typography: Typography
});


export { theme }