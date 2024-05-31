import { createTheme } from '@mui/material/styles';
import HelveticaNow from '../assets/HelveticaNowforMonks.woff';

function createNewTheme() {
    const themeToCreate = createTheme({
        palette: {
            primary: {
                main: '#F5F5F5',
                contrast: '#0045CB'
            },
        },
        typography: {
            fontFamily: 'Helvetica, sans-serif',
            h1: {
                fontSize: '3.6rem'
            },
            h2: {
                fontSize: '1.8rem',
            },
            body1: {
                fontSize: '1.4rem'
            },
            body2: {
                fontSize: '1rem',
            
            },
            details: {
                fontSize: '0.9rem',
                lineHeight: '0.7rem'
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                  @font-face {
                    font-family: 'Helvetica';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 400;
                    src: local('Helvetica'), local('Helvetica-Regular'), url(${HelveticaNow}) format('woff');
                  }
                `,
            },
            MuiContainer: {
                styleOverrides: {
                    root: {
                        maxWidth: 'none',
                        minWidth: 'none',
                        padding: 0,
                        '&:not(:first-of-type)': {
                            padding: 0
                        },
                    }
                }
            },
        }
    });
    return themeToCreate;
}

const theme = createNewTheme();
export default theme;