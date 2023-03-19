import axios from 'axios'

import { ResponseChangeType, ResponseDataType, ResponseType } from '../types/dataType'
import { HOST } from 'shared/const/hostAPI'
import { X_AUTH_TOKEN } from 'shared/const/localStorage'

export const tableService = {
    getTableData: async () => {
        try {
            const { data } = await axios.get<ResponseType>(
                HOST + '/ru/data/v3/testmethods/docs/userdocs/get',
                {
                    headers: { 'x-auth': localStorage.getItem(X_AUTH_TOKEN) },
                },
            )

            return data
        } catch (error) {
            console.log('Ошибка запроса. Повторите позже.')
        }
    },
    deleteTableItem: async (id: string) => {
        try {
            const { data } = await axios.get<ResponseType>(
                HOST + `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
                {
                    headers: { 'x-auth': localStorage.getItem(X_AUTH_TOKEN) },
                },
            )

            return data
        } catch (error) {
            console.log('Ошибка запроса. Повторите позже.')
        }
    },
    changeTableItem: async (id: string, item: ResponseDataType) => {
        try {
            const { data } = await axios.post<ResponseChangeType>(
                HOST + `/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
                item,
                {
                    headers: { 'x-auth': localStorage.getItem(X_AUTH_TOKEN) },
                },
            )

            return data
        } catch (error) {
            console.log('Ошибка запроса. Повторите позже.')
        }
    },
    addTableItem: async (item: ResponseDataType) => {
        try {
            const { data } = await axios.post<ResponseChangeType>(
                HOST + `/ru/data/v3/testmethods/docs/userdocs/create`,
                item,
                {
                    headers: { 'x-auth': localStorage.getItem(X_AUTH_TOKEN) },
                },
            )

            return data
        } catch (error) {
            console.log('Ошибка запроса. Повторите позже.')
        }
    },
}
