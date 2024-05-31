import { createTheme } from '@mui/material/styles'
import HelveticaNow from '../assets/HelveticaNowforMonks.woff'
function createNewTheme(colorPalette) {
    const themeToCreate = createTheme({
        palette: {
            primary: {
                main: colorPalette.main,
                contrast: colorPalette.contrast

            },
        },
        typography: {
            h1: {
                fontFamily: 'Helvetica',
                fontSize: '4rem'
            },
            h2: {
                fontFamily: 'Helvetica',
                fontSize: '2rem'
            },
            body1: {
                fontFamily: 'Helvetica',
                fontSize: '1rem'
            },
            body2: {
                fontFamily: 'HelveticaSans',
                fontSize: '1rem'
            },
            details: {
                fontFamily: 'Helvetica',
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
            /* MuiContainer: {
                styleOverrides: {
                    root: {
                        display: 'flex',
                        maxWidth: 'none',
                        minWidth: 'none',
                        padding: undefined,
                        '@media (min-width: 600px)': {
                            padding: 0,
                        },
                        '@media (min-width: 1200px)': {
                            maxWidth: 'none',
                        },
                        width: undefined,
                        margin: undefined

                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontFamily: undefined,
                        backgroundColor: colorPalette.bkBlack,
                        color: undefined,

                    }
                }
            } */
        }
    })
    return themeToCreate
}


const colorPalette = {
    main: '#F5F5F5',
    contrast: '#0045CB',
}

const theme = createNewTheme(colorPalette)
export default theme