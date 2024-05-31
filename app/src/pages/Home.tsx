import { useTheme } from "@mui/material/styles";
import "./main.css";
import { Typography, Container, Box } from "@mui/material";
import dogs from '../assets/img/dogs.jpeg'
import candle from '../assets/img/candle.png'
import ilMondo from '../assets/img/ilMondo.jpg'

import bigPaper from '../assets/img/bigPaper.png'
import smallPaper from '../assets/img/smallPaper.png'





export default function HomePage(){
    const theme = useTheme()
    return(
        <>
            <Container 
                component={'main'} 
                maxWidth="false"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    width: '100%',
                    minHeight: '100vh',
                    margin: 0,
                    color: theme.palette.primary.contrast, 
                    textAlign: 'center',
                    paddingTop: '1rem'
                }}
            >
                <Typography 
                    sx={{
                        textAlign: 'center',
                        margin: '0rem',
                    }} 
                    variant={'h1'}
                >
                    This is a website
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '1.5rem'
                    }}
                >
                    <img src={dogs} alt="" className="dogs"/>
                    <img src={candle} alt="" className="candle"/>
                    <img src={ilMondo} alt="" className="tarotCard"/>

                </Box>
                <Typography 
                    variant={'h2'}
                    sx={{
                        textDecoration: 'underline',
                        marginTop: '3rem'
                    }}
                >
                    it is a promise I made to myself - it doesn’t have to mean anything
                </Typography>



            </Container>

            <WritingSection />

        </>
    )
}

export function WritingSection(){
    const theme = useTheme()
    /* const bigPaperWriting = "well. I seem to be here once again. I suppose I made a promise to myself - it doesn’t have to mean anything.\nRecordé sus palabras: la traducción significa una barrera que nunca se puede cruzar. Hablaba de libros, pero también de nosotros; apenas hablábamos el lenguaje del otro y el punto medio nos quedaba corto. Aún así, intentamos, nos preguntamos cosas respondidas con palabras torpes y suavidad. Y entonces, sin quererlo, pasó; de alguna manera, sentí que através de él me habló dios. Me dijo ‘don’t worry, baby, you’re gonna be okay’.\nIt doesn’t have to mean anything and therefore it does.\nFue ahí, en ese mismo medio, que me consagré."; */

    const bigPaperWriting = `well. I seem to be here once again. I suppose I made a promise to myself - it doesn’t have to mean anything.
    Recordé sus palabras: la traducción significa una barrera que nunca se puede cruzar. Hablaba de libros, pero también de nosotros; apenas hablábamos el lenguaje del otro y el punto medio nos quedaba corto. Aún así, intentamos, nos preguntamos cosas respondidas con palabras torpes y suavidad. Y entonces, sin quererlo, pasó; de alguna manera, sentí que através de él me habló dios. Me dijo ‘don’t worry, baby, you’re gonna be okay’.
    It doesn’t have to mean anything and therefore it does.
    Fue ahí, en ese mismo medio, que me consagré.`;

    const smallPaperWriting = `en invierno siempre me enfermo por no secarme el pelo. Dejo que el viento lo acaricie, me cuente un cuento; la ternura es un ejercicio que no se lleva el tiempo.
    La otra noche le prendí una vela a mis recuerdos, tarareé una melodía para adentro. Lo efectivo es un cisne de origami que se deshizo en la tormenta, pero recuerdo que alguna vez fuimos suaves                que tracé con mis dedos tu carne
    `
    

    return(
        <>
            <Container 
                component={'main'} 
                maxWidth="false"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    width: '100%',
                    minHeight: '100vh',
                    margin: 0
                }}
            >
                <Container component={'div'}
                    sx={{
                        border: 'solid 2px red'
                    }}
                >
                    <Typography>
                        {bigPaperWriting}
                    </Typography>

                </Container>
                <Container component={'div'}
                    sx={{
                        border: 'solid 2px red'
                    }}
                >
                    <Typography>{smallPaperWriting}</Typography>
                </Container>
          


            </Container>
        </>
    )
}