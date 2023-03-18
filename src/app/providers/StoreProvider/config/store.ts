import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { tableReducer } from 'features/TableData'
import { loginReducer } from 'features/UserAuth'
import { StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loginForm: loginReducer,
        tableData: tableReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    })
}
