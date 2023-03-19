import { Container } from '@mui/material'
import { MainWidget } from 'widgets/MainWidget'

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
}

const MainPage = () => {
    return (
        <Container maxWidth="xl" sx={containerStyle}>
            <MainWidget />
        </Container>
    )
}

export default MainPage
