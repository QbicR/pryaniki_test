import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginType } from '../types/loginType'
import { loginAsyncThunk } from '../services/loginAsyncThunk'

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsyncThunk.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(loginAsyncThunk.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginAsyncThunk.rejected, (state, action) => {
                state.error = action.payload as string
                state.isLoading = false
            })
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
