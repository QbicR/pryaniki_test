import { LoginType } from '../types/loginType'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginType> = { username: '' }
        expect(loginReducer(state as LoginType, loginActions.setUsername('user1'))).toEqual({
            username: 'user1',
        })
    })

    test('test set password', () => {
        const state: DeepPartial<LoginType> = { password: '' }
        expect(loginReducer(state as LoginType, loginActions.setPassword('password'))).toEqual({
            password: 'password',
        })
    })

    test('test set loading', () => {
        const state: DeepPartial<LoginType> = { isLoading: false }
        expect(loginReducer(state as LoginType, loginActions.setLoading(true))).toEqual({
            isLoading: true,
        })
    })

    test('test set error', () => {
        const state: DeepPartial<LoginType> = { error: '' }
        expect(loginReducer(state as LoginType, loginActions.setError('error'))).toEqual({
            error: 'error',
        })
    })
})
