import { StateSchema } from 'app/providers/StoreProvider'
import { getDataState } from './getDataState'

describe('getDataState.test', () => {
    test('should return tableData state', () => {
        const state: DeepPartial<StateSchema> = {
            tableData: {
                data: [],
                isLoading: true,
                error: '',
            },
        }
        expect(getDataState(state as StateSchema)).toEqual({
            data: [],
            isLoading: true,
            error: '',
        })
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getDataState(state as StateSchema)).toEqual(undefined)
    })
})
