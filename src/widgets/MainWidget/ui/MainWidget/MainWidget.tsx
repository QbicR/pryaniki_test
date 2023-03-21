import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Typography } from '@mui/material'

import { userActions } from 'entities/User'
import { TableData } from 'features/TableData'
import { X_AUTH_TOKEN } from 'shared/const/localStorage'
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

export const MainWidget = () => {
    const disptach = useDispatch()
    const isAuth = localStorage.getItem(X_AUTH_TOKEN)
    const navigate = useNavigate()

    const logout = () => {
        disptach(userActions.logout())
        navigate(RoutePath.main)
    }

    return (
        <div>
            {isAuth ? (
                <>
                    <Button
                        variant="contained"
                        size="large"
                        color="error"
                        onClick={logout}
                        sx={{ position: 'absolute', top: 30, right: 30 }}
                    >
                        Выйти
                    </Button>
                    <TableData />
                </>
            ) : (
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
            )}
        </div>
    )
}
