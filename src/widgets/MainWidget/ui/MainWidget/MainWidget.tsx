import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card, Typography } from '@mui/material'

import { userActions } from 'entities/User'
import { TableData } from 'features/TableData'
import { X_AUTH_TOKEN } from 'shared/const/localStorage'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { ButtonUI } from 'shared/ui/Button/ButtonUI'

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

    const logout = useCallback(() => {
        disptach(userActions.logout())
        navigate(RoutePath.main)
    }, [disptach, navigate])

    return (
        <div>
            {isAuth ? (
                <>
                    <ButtonUI
                        onClick={logout}
                        variant={'contained'}
                        size={'large'}
                        color={'error'}
                        sx={{ position: 'absolute', top: 30, right: 30 }}
                        content={'Выйти'}
                    />
                    <TableData />
                </>
            ) : (
                <Card sx={cardStyle}>
                    <Typography sx={{ fontSize: 32 }} color="text.secondary" gutterBottom>
                        Авторизуйтесь, чтобы воспользоваться таблицей
                    </Typography>
                    <ButtonUI
                        onClick={() => navigate(RoutePath.auth)}
                        variant={'contained'}
                        size={'large'}
                        color={'info'}
                        content={'Войти'}
                    />
                </Card>
            )}
        </div>
    )
}
