import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'

import { userActions } from 'entities/User'
import { TableData } from 'features/TableData'
import { X_AUTH_TOKEN } from 'shared/const/localStorage'
import { AuthWidget } from '../AuthWidget/AuthWidget'

export const MainWidget = () => {
    const disptach = useDispatch()
    const isAuth = localStorage.getItem(X_AUTH_TOKEN)

    const logout = () => {
        disptach(userActions.logout())
        window.location.reload()
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
