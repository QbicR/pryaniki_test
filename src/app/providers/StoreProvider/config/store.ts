import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { tableReducer } from 'features/TableData'
import { loginReducer } from 'features/UserAuth'
import { StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loginForm: loginReducer,
        tableData: tableReducer,
        userData: userReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    })
}
