import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { X_AUTH_TOKEN } from 'shared/const/localStorage'
import { HOST } from 'shared/const/hostAPI'
import { ResponseType } from './../types/loginType'

interface LoginAsyncThunkProps {
    username: string
    password: string
}

export const loginAsyncThunk = createAsyncThunk<
    ResponseType,
    LoginAsyncThunkProps,
    { rejectValue: string }
>('login/loginAsyncThunk', async (authData, thunkAPI) => {
    try {
        const response = await axios.post<ResponseType>(
            HOST + '/ru/data/v3/testmethods/docs/login',
            authData,
        )

        if (!response.data) {
            throw new Error()
        }

        localStorage.setItem(X_AUTH_TOKEN, response.data.data.token)

        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue('Неверный пароль')
    }
})
