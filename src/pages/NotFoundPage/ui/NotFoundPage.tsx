import { Card, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { ButtonUI } from 'shared/ui/Button/ButtonUI'

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
                <ButtonUI
                    variant={'text'}
                    size={'medium'}
                    onClick={() => navigate(RoutePath.main)}
                    color={'info'}
                    content={'На главную'}
                />
            </Card>
        </Container>
    )
}

export default NotFoundPage
