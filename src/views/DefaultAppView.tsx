import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthenticationButton } from '../components/AuthenticationButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const DefaultAppView = function({}) {
    return (
        <React.Fragment>
            <AppBar position='static'>
                <Toolbar variant='regular'>
                    <Typography variant="h6" color="inherit" component="div">
                        Speck
                    </Typography>
                    <Box sx={{flexGrow: 1}} />
                    <Box>
                        <AuthenticationButton />
                    </Box>
                </Toolbar>
            </AppBar>
            <Outlet />
        </React.Fragment>
    )
}
