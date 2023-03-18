import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { X_AUTH_TOKEN } from 'shared/const/localStorage'
import { HOST } from 'shared/const/hostAPI'

import { ResponseDataType } from './../types/dataType'
import { TableDataType } from '../types/dataType'

const initialState: TableDataType = {
    data: [],
    isLoading: false,
    error: '',
}

export const tableSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<ResponseDataType[]>) => {
            state.data = action.payload
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter((item) => item.id !== action.payload)
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        updateItem: (state, action: PayloadAction<ResponseDataType>) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        },
    },
})

export const { actions: tableActions } = tableSlice
export const { reducer: tableReducer } = tableSlice

export const getTableData =
    () =>
    async (dispatch: (arg0: { payload: any; type: 'data/setError' | 'data/setData' }) => void) => {
        try {
            const response = await axios.get<any>(
                HOST + '/ru/data/v3/testmethods/docs/userdocs/get',
                {
                    headers: { 'x-auth': localStorage.getItem(X_AUTH_TOKEN) },
                },
            )

            dispatch(tableActions.setData(response.data.data))
        } catch (error) {
            dispatch(tableActions.setError('Ошибка запроса. Повторите позже.'))
        }
    }

export const deleteTableItem =
    (id: string) =>
    async (
        dispatch: (arg0: { payload: string; type: 'data/setError' | 'data/deleteItem' }) => void,
    ) => {
        try {
            const response = await axios.delete<any>(
                HOST + `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
                {
                    headers: { 'x-auth': localStorage.getItem(X_AUTH_TOKEN) },
                },
            )

            if (response.data.error_message === 'OK') {
                dispatch(tableActions.deleteItem(id))
            } else {
                dispatch(tableActions.setError('Ошибка запроса. Повторите позже.'))
            }
        } catch (error) {
            dispatch(tableActions.setError('Ошибка запроса. Повторите позже.'))
        }
    }

export const changeTableItem = (id: string, data: any) => async (dispatch: any) => {
    try {
        const response = await axios.post<any>(
            HOST + `/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
            data,
            {
                headers: { 'x-auth': localStorage.getItem(X_AUTH_TOKEN) },
            },
        )

        dispatch(tableActions.updateItem(response.data.data))
    } catch (error) {
        dispatch(tableActions.setError('Ошибка запроса. Повторите позже.'))
    }
}
