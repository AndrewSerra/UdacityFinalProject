import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LoginButton = function() {
    const { loginWithRedirect } = useAuth0();
    const onLoginClick = () => loginWithRedirect({
        max_age: 10080, // one week in seconds
    })
    return <Button variant='text' color='inherit' onClick={onLoginClick}>Login</Button> 
}

const LogoutButton = function() {
    const { logout } = useAuth0();
    const onLogoutClick = () => logout({
        
    })
    return <Button variant='text' color='inherit' onClick={onLogoutClick}>Logout</Button> 
}

export const AuthenticationButton = function() {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? <LogoutButton /> : <LoginButton />
}
