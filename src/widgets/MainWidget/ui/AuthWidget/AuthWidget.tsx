import { Button, Card, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { RoutePath } from 'shared/config/routeConfig/routeConfig'

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px',
    textAlign: 'center',
    width: 500,
    height: 300,
    p: 4,
}

export const AuthWidget = () => {
    const navigate = useNavigate()

    return (
        <Card sx={cardStyle}>
            <Typography sx={{ fontSize: 32 }} color="text.secondary" gutterBottom>
                Авторизуйтесь, чтобы воспользоваться таблицей
            </Typography>
            <Button
                size="large"
                variant="contained"
                color="info"
                onClick={() => navigate(RoutePath.auth)}
            >
                Войти
            </Button>
        </Card>
    )
}
