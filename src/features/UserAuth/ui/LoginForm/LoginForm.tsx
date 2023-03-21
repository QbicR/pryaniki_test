import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { Box, Typography } from '@mui/material'

import { logIn, loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState'
import { Input } from 'shared/ui/Input/Input'
import { ButtonUI } from 'shared/ui/Button/ButtonUI'

const boxStyle = {
    width: '100%',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
}

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
        dispatch(logIn('user' + username, password))
        dispatch(loginActions.setUsername(''))
        dispatch(loginActions.setPassword(''))
        dispatch(loginActions.setError(''))
        dispatch(loginActions.setLoading(false))
    }, [dispatch, username, password])

    return (
        <Box sx={boxStyle}>
            <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
                Вход
            </Typography>
            <Input
                value={username}
                onChange={onChangeUsername}
                variant={'filled'}
                label={Number(username) < 0 ? 'Номер не может быть меньше 1' : 'Введите номер'}
                error={Number(username) < 0 ? true : false}
            />
            <Input
                value={password}
                onChange={onChangePassword}
                variant={'filled'}
                label={error ? error : "Введите 'password'"}
                error={error ? true : false}
            />
            <ButtonUI
                disabled={isLoading || !password || !username || Number(username) < 0}
                variant={'contained'}
                size={'large'}
                color={'primary'}
                onClick={onClickLogin}
                content={!isLoading ? 'Войти' : 'Вход...'}
            />
        </Box>
    )
}
