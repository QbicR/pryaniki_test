import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginType } from '../types/loginType'
import authService from '../services/auth.service'
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
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice

export const logIn =
    (authData: Record<string, string>) =>
    async (
        dispatch: (arg0: { payload: any; type: 'user/setAuthData' | 'login/setError' }) => void,
    ) => {
        try {
            const response = await authService.login(authData)

            if (response.error_message === 'OK') {
                localStorage.setItem(X_AUTH_TOKEN, response.data.token)
                dispatch(userActions.setAuthData(response.data.token))
            } else {
                dispatch(loginActions.setError('Неверный пароль'))
            }
        } catch (error) {
            dispatch(loginActions.setError('Ошибка запроса. Повторите позже.'))
        }
    }
