import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Box, Button, TextField } from '@mui/material'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState'
import { loginAsyncThunk } from '../../model/services/loginAsyncThunk'

export const LoginForm = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const onClickLogin = useCallback(() => {
        dispatch(loginAsyncThunk({ username, password }))
    }, [dispatch, username, password])

    return (
        <Box
            sx={{
                width: 600,
                height: 300,
                border: '1px solid #181818',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'column',
            }}
        >
            <h2>Вход</h2>
            {error && <h3>{error}</h3>}
            <TextField
                sx={{ width: '80%' }}
                onChange={(e) => onChangeUsername(e.target.value)}
                value={username}
                type="number"
                variant="filled"
                id="filled-size-small"
                label="Введите номер"
            />
            <TextField
                sx={{ width: '80%' }}
                onChange={(e) => onChangePassword(e.target.value)}
                value={password}
                type="password"
                variant="filled"
                id="filled-size-small"
                label="Введите 'password'"
            />
            <Button
                disabled={isLoading}
                onClick={onClickLogin}
                size="large"
                variant="outlined"
                color="primary"
            >
                Войти
            </Button>
        </Box>
    )
}
