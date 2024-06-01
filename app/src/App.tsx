import './App.css'
import theme from "./utils/Theme.tsx";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from './pages/Home';


function App() {


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
    </ThemeProvider>
  )
}

export default App
