import { useState } from 'react'

import './App.css'
import { useTheme } from "@mui/material/styles";
import theme from "./utils/Theme.js";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from './pages/Home';
function App() {
  const [count, setCount] = useState(0)


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
    </ThemeProvider>
  )
}

export default App
