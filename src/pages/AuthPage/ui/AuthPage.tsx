import { Card, Container } from '@mui/material'
import { LoginForm } from 'features/UserAuth'

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: 600,
}
const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px',
    textAlign: 'center',
    width: 500,
    height: 400,
    p: 4,
}

const AuthPage = () => {
    return (
        <Container maxWidth="xl" sx={containerStyle}>
            <Card sx={cardStyle}>
                <LoginForm />
            </Card>
        </Container>
    )
}

export default AuthPage
