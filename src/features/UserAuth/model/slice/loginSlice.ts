import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginType } from '../types/loginType'
import { authService } from '../services/auth.service'
import { X_AUTH_TOKEN } from 'shared/const/localStorage'
import { userActions } from 'entities/User'

const initialState: LoginType = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice

export const logIn =
    (username: string, password: string) =>
    async (
        dispatch: (arg0: {
            payload: any
            type: 'login/setLoading' | 'user/setAuthData' | 'login/setError'
        }) => void,
    ) => {
        dispatch(loginActions.setLoading(true))
        try {
            const response = await authService.login(username, password)

            if (response.error_message === 'OK') {
                localStorage.setItem(X_AUTH_TOKEN, response.data.token)
                dispatch(userActions.setAuthData(response.data.token))
                dispatch(loginActions.setLoading(false))
            } else {
                dispatch(loginActions.setError('Неверный пароль'))
            }
        } catch (error) {
            dispatch(loginActions.setError('Ошибка запроса. Повторите позже.'))
        }
    }
