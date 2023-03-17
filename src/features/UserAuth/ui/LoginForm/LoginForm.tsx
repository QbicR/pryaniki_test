import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Box, Button, TextField } from '@mui/material'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState'
import { loginAsyncThunk } from '../../model/services/loginAsyncThunk'

export const LoginForm = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value))
    }

    const onClickLogin = () => {
        dispatch(loginAsyncThunk({ username, password }))
    }

    return (
        <Box
            sx={{
                width: 600,
                height: 300,
                border: '1px solid #181818',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
            }}
        >
            {error && <h3>Вы ввели неверный логин или пароль</h3>}
            <TextField
                sx={{ width: '80%', marginBottom: '30px' }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeUsername(e.target.value)
                }
                value={username}
                type="number"
                variant="filled"
                id="filled-size-small"
                label="Введите номер"
            />
            <TextField
                sx={{ width: '80%' }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangePassword(e.target.value)
                }
                value={password}
                type="password"
                variant="filled"
                id="filled-size-small"
                label="Введите пароль"
                helperText="Введите 'password'"
            />
            <Button
                disabled={isLoading}
                onClick={onClickLogin}
                sx={{ position: 'absolute', bottom: 20 }}
                size="large"
                variant="outlined"
                color="primary"
            >
                Войти
            </Button>
        </Box>
    )
}
