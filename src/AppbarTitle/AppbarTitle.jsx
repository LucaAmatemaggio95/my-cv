import { AppBar, Container, Hidden, Toolbar, Typography } from '@mui/material';

const AppbarTitle = (props) => {
    return (
        <AppBar
            position="fixed"
            elevation={0}
        >
            <Toolbar>
                <Container>
                    <Hidden smUp>
                        <Typography variant="h6" color={props.color}>My CV &middot; Luca Amatemaggio</Typography>
                    </Hidden>
                    <Hidden smDown>
                        <Typography variant="h5" color={props.color}>My CV &middot; Luca Amatemaggio</Typography>
                    </Hidden>
                </Container>
            </Toolbar>
        </AppBar>   
    )
}

export default AppbarTitle