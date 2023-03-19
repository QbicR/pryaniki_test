import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { Box, Button, TextField, Typography } from '@mui/material'

import { logIn, loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState'

const boxStyle = {
    width: '100%',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
}
const inputStyle = { width: '100%' }

export const LoginForm = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setError(''))
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setError(''))
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const onClickLogin = useCallback(() => {
        dispatch(logIn({ username, password }))
    }, [dispatch, username, password])

    return (
        <Box sx={boxStyle}>
            <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
                Вход
            </Typography>
            <TextField
                sx={inputStyle}
                onChange={(e) => onChangeUsername(e.target.value)}
                value={username}
                type="number"
                variant="filled"
                id="filled-size-small"
                label="Введите номер"
            />
            <TextField
                sx={inputStyle}
                onChange={(e) => onChangePassword(e.target.value)}
                value={password}
                label={error ? error : "Введите 'password'"}
                error={error ? true : false}
                id="filled-error-helper-text"
                variant="filled"
            />
            <Button
                disabled={isLoading || !password || !username}
                onClick={onClickLogin}
                size="large"
                variant="contained"
                color="primary"
            >
                Войти
            </Button>
        </Box>
    )
}
