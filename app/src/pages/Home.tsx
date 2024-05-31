import { useTheme } from "@mui/material/styles";
import "./main.css";
import { Typography, Box } from "@mui/material";


export default function HomePage(){
    const theme = useTheme()
    return(
        <Typography sx={{color: theme.palette.primary.contrast}}>HELLO WORLD</Typography>
    )
}