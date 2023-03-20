import { StateSchema } from 'app/providers/StoreProvider'
import { getUserAuthData } from './getUserAuthData'

describe('getUserAuthData.test', () => {
    test('should return user value', () => {
        const state: DeepPartial<StateSchema> = {
            userData: { user: 'user' },
        }
        expect(getUserAuthData(state as StateSchema)).toEqual('user')
    })
})
