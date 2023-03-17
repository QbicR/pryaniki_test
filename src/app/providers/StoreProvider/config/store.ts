import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/UserAuth'
import { StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loginForm: loginReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    })
}
