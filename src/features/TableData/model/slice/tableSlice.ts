import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ResponseDataType } from './../types/dataType'
import { TableDataType } from '../types/dataType'
import { tableService } from '../services/table.service'

const initialState: TableDataType = {
    data: [],
    isLoading: true,
    error: '',
}

export const tableSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<ResponseDataType[]>) => {
            state.data = action.payload
            state.isLoading = false
            state.error = ''
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setLoading: (state) => {
            state.isLoading = true
        },
        addItem: (state, action: PayloadAction<ResponseDataType>) => {
            state.data.unshift(action.payload)
            state.error = ''
        },
        updateItem: (state, action: PayloadAction<ResponseDataType>) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
            state.error = ''
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter((item) => item.id !== action.payload)
            state.error = ''
        },
    },
})

export const { actions: tableActions } = tableSlice
export const { reducer: tableReducer } = tableSlice

export const getTableData =
    () =>
    async (
        dispatch: (arg0: {
            payload: string | ResponseDataType[]
            type: 'data/setError' | 'data/setLoading' | 'data/setData'
        }) => void,
    ) => {
        dispatch(tableActions.setLoading())
        try {
            const { data } = await tableService.getTableData()

            dispatch(tableActions.setData(data))
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
            const response = await tableService.deleteTableItem(id)

            if (response.error_message === 'OK') {
                dispatch(tableActions.deleteItem(id))
            } else {
                dispatch(tableActions.setError('Ошибка запроса. Повторите позже.'))
            }
        } catch (error) {
            dispatch(tableActions.setError('Ошибка запроса. Повторите позже.'))
        }
    }

export const changeTableItem =
    (id: string, item: ResponseDataType) =>
    async (
        dispatch: (arg0: {
            payload: string | ResponseDataType
            type: 'data/setError' | 'data/updateItem'
        }) => void,
    ) => {
        try {
            const { data } = await tableService.changeTableItem(id, item)

            if (data) {
                dispatch(tableActions.updateItem(data))
            } else {
                dispatch(
                    tableActions.setError(
                        'Поля со звездочкой обязательны для заполнения и не могут быть пустыми!',
                    ),
                )
            }
        } catch (error) {
            dispatch(tableActions.setError('Ошибка запроса. Повторите позже.'))
        }
    }

export const addTableItem =
    (item: ResponseDataType) =>
    async (
        dispatch: (arg0: {
            payload: string | ResponseDataType
            type: 'data/setError' | 'data/addItem'
        }) => void,
    ) => {
        try {
            const { data } = await tableService.addTableItem(item)

            if (data) {
                dispatch(tableActions.addItem(data))
            } else {
                dispatch(
                    tableActions.setError(
                        'Поля со звездочкой обязательны для заполнения и не могут быть пустыми!',
                    ),
                )
            }
        } catch (error) {
            dispatch(tableActions.setError('Ошибка запроса. Повторите позже.'))
        }
    }
