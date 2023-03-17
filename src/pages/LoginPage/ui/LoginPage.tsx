import { Container } from '@mui/material'
import { LoginForm } from 'features/UserAuth'
import React from 'react'

const LoginPage = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100%',
            }}
        >
            <LoginForm />
        </Container>
    )
}

export default LoginPage
