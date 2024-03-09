import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import page_background from './images/page_background.png';

const App = () => {
    return (
        // <div>
        //     <h1>App</h1>
        // </div>
        <Container maxwidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>
                TheSocial
                </Typography><img src={page_background} alt='page_background' height='120'></img>
            </AppBar>
        </Container>
    );
}

export default App;