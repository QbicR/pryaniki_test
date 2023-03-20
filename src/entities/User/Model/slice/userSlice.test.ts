import { UserType } from '../types/userType'
import { userActions, userReducer } from './userSlice'

describe('userSlice.test', () => {
    test('setAuthData', () => {
        const state: UserType = { user: '' }

        expect(userReducer(state, userActions.setAuthData('user1'))).toEqual({ user: 'user1' })
    })
    test('logout', () => {
        const state: UserType = { user: 'user1' }

        expect(userReducer(state, userActions.logout())).toEqual({ user: '' })
    })
    test('setAuthData should work with empty state', () => {
        expect(userReducer(undefined, userActions.setAuthData('user1'))).toEqual({ user: 'user1' })
    })
})
