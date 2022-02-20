import { Box, Container, createTheme, Grid, Hidden, ThemeProvider, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import AppbarTitle from './AppbarTitle/AppbarTitle';
import Formation from './Formation/Formation';
import Hobbies from './Hobbies/Hobbies';
import OtherTechs from './TechSkills/OtherTechs';
import TechSkills from './TechSkills/TechSkills';
import WorkingExp from './WorkingExp/WorkingExp';

const theme = createTheme({
    palette: {
        primary: {
            main: '#222335'
        },
        secondary: {
            main: '#2E7665'
        }
    },
  typography: {
    fontFamily: '"Montserrat", sans serif',
    body1: {
        fontWeight: 500,
    },
    h5: {
        fontWeight: 600
    },
    h6: {
        fontWeight: 600
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(10px)',
            boxShadow: 0,
            borderBottom: '1px solid #222335'
        }
      }
    },
    MuiCard: {
        styleOverrides: {
            root: {
                border: 'none'
            }
        },
        defaultProps: {
            variant: 'outlined'
        }
    },
    MuiCardHeader: {
        defaultProps: {
            titleTypographyProps: {
                color: 'primary'
            }
        }
    }
  }
})

function App() {

    const [color, setColor] = useState('inherit');

    const listenScrollEvent = (e) => {
        if (window.scrollY > 40) {
            setColor('primary');
        } else {
            setColor('inherit');
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);

    }, [])

    return (
        
        <ThemeProvider theme={theme}>

            <AppbarTitle color={color} />
            <Toolbar />

            <Container>

                <Box mt={3}>
    
                    <AboutMe />
    
                </Box>

                <Box mt={3}>

                    <Grid container spacing={3}>

                        <Grid item xs={12} md={8}>

                            <WorkingExp />

                            <Hidden smUp>

                                <Box mt={3}>

                                    <TechSkills />
                                    
                                </Box>

                                <OtherTechs />

                            </Hidden>

                            <Box mt={3}>

                                <Formation />

                            </Box>

                            <Box mt={3}>

                                <Hobbies />

                            </Box>

                        </Grid>

                        <Hidden smDown>
                            <Grid item xs={12} md={4}>

                                <TechSkills />

                                <OtherTechs />

                            </Grid>
                        </Hidden>

                    </Grid>

                </Box>
            
            </Container>
            <Toolbar />     

        </ThemeProvider>

    );
}

export default App;
