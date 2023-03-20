import { TableDataType } from '../types/dataType'
import { tableActions, tableReducer } from './tableSlice'

describe('tableSlice.test', () => {
    test('test set data', () => {
        const state: DeepPartial<TableDataType> = { data: [], isLoading: true, error: 'error' }
        expect(
            tableReducer(
                state as TableDataType,
                tableActions.setData([
                    {
                        id: 'string',
                        companySigDate: 'string',
                        companySignatureName: 'string',
                        documentName: 'string',
                        documentStatus: 'string',
                        documentType: 'string',
                        employeeNumber: 'string',
                        employeeSigDate: 'string',
                        employeeSignatureName: 'string',
                    },
                ]),
            ),
        ).toEqual({
            data: [
                {
                    id: 'string',
                    companySigDate: 'string',
                    companySignatureName: 'string',
                    documentName: 'string',
                    documentStatus: 'string',
                    documentType: 'string',
                    employeeNumber: 'string',
                    employeeSigDate: 'string',
                    employeeSignatureName: 'string',
                },
            ],
            isLoading: false,
            error: '',
        })
    })
    test('test set error', () => {
        const state: DeepPartial<TableDataType> = { error: '' }
        expect(tableReducer(state as TableDataType, tableActions.setError('error'))).toEqual({
            error: 'error',
        })
    })
    test('test set isLoading', () => {
        const state: DeepPartial<TableDataType> = { isLoading: false }
        expect(tableReducer(state as TableDataType, tableActions.setLoading())).toEqual({
            isLoading: true,
        })
    })
    test('test add item', () => {
        const state: DeepPartial<TableDataType> = { data: [], error: 'error' }
        expect(
            tableReducer(
                state as TableDataType,
                tableActions.addItem({
                    id: 'string',
                    companySigDate: 'string',
                    companySignatureName: 'string',
                    documentName: 'string',
                    documentStatus: 'string',
                    documentType: 'string',
                    employeeNumber: 'string',
                    employeeSigDate: 'string',
                    employeeSignatureName: 'string',
                }),
            ),
        ).toEqual({
            data: [
                {
                    id: 'string',
                    companySigDate: 'string',
                    companySignatureName: 'string',
                    documentName: 'string',
                    documentStatus: 'string',
                    documentType: 'string',
                    employeeNumber: 'string',
                    employeeSigDate: 'string',
                    employeeSignatureName: 'string',
                },
            ],
            error: '',
        })
    })
    test('test update item with other data', () => {
        const state: DeepPartial<TableDataType> = {
            data: [
                {
                    id: 'string',
                    companySigDate: 'string',
                    companySignatureName: 'string',
                    documentName: 'string',
                    documentStatus: 'string',
                    documentType: 'string',
                    employeeNumber: 'string',
                    employeeSigDate: 'string',
                    employeeSignatureName: 'string',
                },
            ],
            error: 'error',
        }
        expect(
            tableReducer(
                state as TableDataType,
                tableActions.updateItem({
                    id: 'string',
                    companySigDate: 'string2',
                    companySignatureName: 'string2',
                    documentName: 'string2',
                    documentStatus: 'string',
                    documentType: 'string',
                    employeeNumber: 'string',
                    employeeSigDate: 'string',
                    employeeSignatureName: 'string',
                }),
            ),
        ).toEqual({
            data: [
                {
                    id: 'string',
                    companySigDate: 'string2',
                    companySignatureName: 'string2',
                    documentName: 'string2',
                    documentStatus: 'string',
                    documentType: 'string',
                    employeeNumber: 'string',
                    employeeSigDate: 'string',
                    employeeSignatureName: 'string',
                },
            ],
            error: '',
        })
    })
    test('test update item with the same data', () => {
        const state: DeepPartial<TableDataType> = {
            data: [
                {
                    id: 'string',
                    companySigDate: 'string',
                    companySignatureName: 'string',
                    documentName: 'string',
                    documentStatus: 'string',
                    documentType: 'string',
                    employeeNumber: 'string',
                    employeeSigDate: 'string',
                    employeeSignatureName: 'string',
                },
            ],
            error: 'error',
        }
        expect(
            tableReducer(
                state as TableDataType,
                tableActions.updateItem({
                    id: 'string2',
                    companySigDate: 'string2',
                    companySignatureName: 'string2',
                    documentName: 'string2',
                    documentStatus: 'string2',
                    documentType: 'string2',
                    employeeNumber: 'string2',
                    employeeSigDate: 'string2',
                    employeeSignatureName: 'string2',
                }),
            ),
        ).toEqual({
            data: [
                {
                    id: 'string',
                    companySigDate: 'string',
                    companySignatureName: 'string',
                    documentName: 'string',
                    documentStatus: 'string',
                    documentType: 'string',
                    employeeNumber: 'string',
                    employeeSigDate: 'string',
                    employeeSignatureName: 'string',
                },
            ],
            error: '',
        })
    })
    test('test detele item', () => {
        const state: DeepPartial<TableDataType> = {
            data: [
                {
                    id: 'string',
                    companySigDate: 'string',
                    companySignatureName: 'string',
                    documentName: 'string',
                    documentStatus: 'string',
                    documentType: 'string',
                    employeeNumber: 'string',
                    employeeSigDate: 'string',
                    employeeSignatureName: 'string',
                },
            ],
            error: 'error',
        }
        expect(tableReducer(state as TableDataType, tableActions.deleteItem('string'))).toEqual({
            data: [],
            error: '',
        })
    })
})
