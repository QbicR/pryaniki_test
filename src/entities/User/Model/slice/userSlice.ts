import { createSlice } from '@reduxjs/toolkit'
import { UserType } from './../types/userType'
import { X_AUTH_TOKEN } from 'shared/const/localStorage'

const initialState: UserType = {
    user: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = ''
            localStorage.removeItem(X_AUTH_TOKEN)
        },
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
