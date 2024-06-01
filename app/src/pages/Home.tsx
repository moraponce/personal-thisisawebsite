import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import "./main.css";
import { Typography, Container, Box } from "@mui/material";
import dogs from '../assets/img/dogs.jpeg'
import candle from '../assets/img/candle.png'
import ilMondo from '../assets/img/ilMondo.jpg'

import bigPaper from '../assets/img/bigPaper.png'
import smallPaper from '../assets/img/smallPaper.jpeg'

import dagger from '../assets/img/dagger.png'
import madres from '../assets/img/madres.png'
import pearl from '../assets/img/pearl.png'
import phone from '../assets/img/phone.png'







export default function HomePage(){
    const theme = useTheme()
    return(
        <>
        <Container 
        component={'main'} 
        maxWidth={false}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            backgroundColor: theme.palette.primary.main,

        }}>
            <WelcomeSection />
            <WritingSection />
            <AmuletSection />
        </Container>
        <Container 
        component='footer'
        maxWidth={false}
        sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            padding: '1rem',
            
        }}>
            <Typography variant='body2'>made with love by mora ponce</Typography>
        </Container>

        </>
    )
}

export function WelcomeSection(){
    const theme = useTheme()

    return(
        <Container 
                component={'div'} 
                maxWidth="false"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    width: '100%',
                    margin: '0 auto',
                    color: theme.palette.primary.contrast, 
                    textAlign: 'center',
                    padding: '2%',
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
                    it is a promise I made to myself - it doesn’t <i>have</i> to mean anything
                </Typography>
            </Container>
    )
}

export function WritingSection(){
    const theme = useTheme()
    const bigPaperWriting = [
        'well. I find myself here once again. I suppose I made a promise to myself - it doesn’t have to mean anything.', 'Recordé sus palabras: la traducción implica una barrera que nunca se va a poder cruzar - entrás sabiendo que hay ideas que van a quedar perdidas en el medio. Hablaba de libros, pero también de nosotros; apenas hablábamos el lenguaje del otro y el punto medio nos quedaba corto. Aún así, intentamos, nos preguntamos cosas para responderlas con palabras torpes y suavidad. Y entonces, casi desapercibido, pasó. Para mí, de alguna manera, fue como si através de él me hubiese hablado dios, dijo: ‘don’t worry, baby, you’re gonna be okay’.', 'It doesn’t have to mean anything and therefore it does.', 'Fue ahí, en ese mismo medio, que volví a nacer.'
    ]

    const smallPaperWriting =["en invierno siempre me enfermo por no secarme el pelo. Dejo que el viento lo acaricie, me cuente un cuento; la ternura es un ejercicio que no se lleva el tiempo.", "La otra noche le prendí una vela a mis recuerdos, tarareé una melodía para adentro. Lo efectivo es un cisne de origami que se deshizo en la tormenta, pero recuerdo que alguna vez fuimos suaves" ]
    

    return(
        <>
            <Container 
                component={'div'} 
                maxWidth="false"
                className="writingContainer"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    width: '90%',
                    maxWidth: '100vw',
                    margin: '1rem 0',
                    display: 'flex',

                }}
            >
                <Container component={'div'}
                    className='bigPaperWriting'
                    sx={{
                        backgroundImage:`url(${bigPaper})`,
                        width:' 60%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column'
                                          
                    }}
                >
                    {
                        bigPaperWriting.map((parragraph) => (
                            <Typography variant='body1' fontWeight='bold' margin="0.5rem 0" key={parragraph}>
                                {parragraph}
                            </Typography>
                        ))
                    }
                 

                </Container>
                <Box sx={{
                    width: '46%',                    
                }}>
                    <Container component={'div'}
                        sx={{
                            backgroundImage:`url(${smallPaper})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",      
                            width: '90%',
                            marginBottom: '1.8%',
                            padding: '1.5%',
                            marginRight: 0,

                        }}
                    >
                        {smallPaperWriting.map((parragraph) => (
                            <Typography variant='body2' sx={{
                                width: '80%',
                                marginLeft: '3.5%',
                                key: {parragraph}
                            }}>
                                {parragraph}
                            </Typography>
                        ))}
                        <Typography variant='body2' textAlign='right'>que tracé con mis dedos tu carne</Typography>

                        
                    </Container>
                    <Container component={'div'}>
                        <iframe width="90%" height="315" src="https://www.youtube.com/embed/klpUlOZyGIs?si=su6EpckmgUiDSawn&amp;start=137" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </Container>

                </Box>
            </Container>
        </>
    )
}

export function AmuletSection(){
    const theme = useTheme()
    const [amuletList, setAmuletList] = useState([
        {
          imgSrc: pearl,
          text: "La capacidad de olvidar y perdonar",
          show: true,
        },
        {
          imgSrc: dagger,
          text: "Confianza en tu camino",
          show: true,
        },
        {
          imgSrc: madres,
          text: "El amor de una madre",
          show: true,
        },
        {
          imgSrc: phone,
          text: "Conocerte a vos mismo",
          show: true,
        },
      ]);


    function handleAmuletClick(index){ 
        const updatedList = [...amuletList];
        updatedList[index].show = !updatedList[index].show;
        setAmuletList(updatedList);
    }

    return(
        <>
            <Container 
                component={'div'} 
                maxWidth="false"
                className="amuletSection"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    width: '90%',
                    maxWidth: '100vw',
                    margin: '1rem 0',
                    display: 'flex',
                }}
            >
                
                <Container 
                maxWidth="false"
                disableGutters	
                sx={{
                    width: '43%', 
                    textAlign: 'right',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}
                >
                    <Typography 
                        variant='h2' 
                        sx={{
                            width: '100%', 
                            color: '#E61D1D',
                            fontSize: '4rem',
                            margin: 0,
                            backgroundColor: theme.palette.primary.dark,
                            border: 'solid 3px black',
                            padding: '0 0.8rem'
                        }}
                    >
                        Por qué no te llevas algo?
                    </Typography>
                    <Typography color='black' variant='body2'><i>cliqueá sobre el que elijas</i></Typography>


                </Container>
                <Container 
                maxWidth="false"
                disableGutters
                sx={{
                    marginRight: '2%',
                    display: 'flex',
                }}
                >
                    <Box className="amuletsCarousel" display='flex'>
                        {amuletList.map((amulet, index) => (
                            <Box 
                                key={amulet.imgSrc} 
                                onClick={() => handleAmuletClick(index)}
                                sx={{
                                    width: '25%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {
                                    amulet.show ? 
                                        <img src={amulet.imgSrc} alt=""/>
                                    : 
                                        <Typography 
                                            sx={{
                                                textAlign: 'center',
                                                width: '70%',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {amulet.text}
                                        </Typography>
                                }
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Container>
        </>
    )
}