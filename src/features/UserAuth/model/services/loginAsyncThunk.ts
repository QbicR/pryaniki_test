import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { HOST } from 'shared/const/hostAPI'
import { X_AUTH_TOKEN } from 'shared/const/localStorage'

export const loginAsyncThunk = createAsyncThunk<any, any, any>(
    'login/loginAsyncThunk',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<any>(
                HOST + '/ru/data/v3/testmethods/docs/login',
                authData,
            )

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(X_AUTH_TOKEN, JSON.stringify(response.data.data.token))

            return response.data
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('error')
        }
    },
)
