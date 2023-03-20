import { Card, Container, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

import { RoutePath } from 'shared/config/routeConfig/routeConfig'

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
}
const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    textAlign: 'center',
    width: 500,
    height: 300,
    p: 4,
}

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <Container maxWidth="xl" sx={containerStyle}>
            <Card sx={cardStyle}>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    К сожалению, вы зашли на несуществующую страницу. Возможно, вы перешли по старой
                    ссылке или ввели неправильный адрес.
                </Typography>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    Попробуйте проверить ссылку или вернитесь на главную страницу
                </Typography>
                <Button onClick={() => navigate(RoutePath.main)} variant="text" size="medium">
                    На главную
                </Button>
            </Card>
        </Container>
    )
}

export default NotFoundPage
