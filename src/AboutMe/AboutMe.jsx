import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { EmailOutlined, PhoneOutlined, PlaceOutlined } from '@mui/icons-material';
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, Chip } from '@mui/material'
import ProfilePic from './ProfilePic_1.jpg'

const AboutMe = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <Card>
            <CardHeader title="About me" />
            <CardContent>
                <Box display={'flex'} flexWrap={matches ? 'wrap' : 'nowrap'} alignItems={'center'} justifyContent={matches ? 'center' : 'flex-start'}>
                    <CardMedia
                        component={'img'}
                        height={160}
                        image={ProfilePic}
                        alt={'ProfilePic'}
                        sx={{borderRadius: '50%', width: 'auto', marginRight: theme.spacing(3)}}
                    />
                    <Box mt={2}>
                        <Typography variant="h6" gutterBottom align={matches ? 'center' : 'left'}>
                            Luca Amatemaggio
                        </Typography>
                        <Typography variant="body1">
                            I love to work in team, sharing, completing, and overcoming difficulties together with other people on a common goal.<br/>
                            Very detail oriented, I always try to improve projects while also keeping an eye on the business needs.
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-around', flexWrap: matches ? 'wrap' : 'nowrap', padding: theme.spacing(3)}}>
                <Chip
                    color="primary"
                    icon={<PhoneOutlined />}
                    clickable
                    component="a"
                    href="tel:+393406289044"
                    variant={'outlined'}
                    label="3406289044"
                    sx={{marginBottom: '8px', fontWeight: 600}}
                />
                <Chip
                    color="primary"
                    icon={<EmailOutlined />}
                    clickable
                    component="a"
                    href="mailto:lamatemaggio@gmail.com"
                    variant={'outlined'}
                    label="lamatemaggio@gmail.com"
                    sx={{marginBottom: '8px', fontWeight: 600}}
                />
                <Chip
                    color="primary"
                    icon={<PlaceOutlined />}
                    component="a"
                    href="#"
                    variant={'outlined'}
                    label="Ornago, MB, Italy"
                    sx={{marginBottom: '8px', fontWeight: 600}}
                />
            </CardActions>
        </Card>
    )
}

export default AboutMe