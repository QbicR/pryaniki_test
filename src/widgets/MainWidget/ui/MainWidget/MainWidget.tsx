import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'

import { userActions } from 'entities/User'
import { TableData } from 'features/TableData'
import { X_AUTH_TOKEN } from 'shared/const/localStorage'
import { AuthWidget } from '../AuthWidget/AuthWidget'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

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
                <AuthWidget />
            )}
        </div>
    )
}
