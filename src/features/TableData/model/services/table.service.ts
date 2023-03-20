import { ResponseChangeType, ResponseDataType, ResponseType } from '../types/dataType'
import { HOST } from 'shared/const/hostAPI'
import { X_AUTH_TOKEN } from 'shared/const/localStorage'

export const tableService = {
    getTableData: async () => {
        try {
            const data: ResponseType = await fetch(
                HOST + '/ru/data/v3/testmethods/docs/userdocs/get',
                {
                    method: 'GET',
                    headers: {
                        'x-auth': localStorage.getItem(X_AUTH_TOKEN),
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                },
            ).then((res) => res.json())

            return data
        } catch (error) {
            console.log('Ошибка запроса. Повторите позже.')
        }
    },
    deleteTableItem: async (id: string) => {
        try {
            const data: ResponseType = await await fetch(
                HOST + `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'x-auth': localStorage.getItem(X_AUTH_TOKEN),
                    },
                },
            ).then((res) => res.json())

            return data
        } catch (error) {
            console.log('Ошибка запроса. Повторите позже.')
        }
    },
    changeTableItem: async (id: string, item: ResponseDataType) => {
        try {
            const data: ResponseChangeType = await fetch(
                HOST + `/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'x-auth': localStorage.getItem(X_AUTH_TOKEN),
                    },
                    body: JSON.stringify(item),
                },
            ).then((res) => res.json())

            return data
        } catch (error) {
            console.log('Ошибка запроса. Повторите позже.')
        }
    },
    addTableItem: async (item: ResponseDataType) => {
        try {
            const data: ResponseChangeType = await fetch(
                HOST + `/ru/data/v3/testmethods/docs/userdocs/create`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'x-auth': localStorage.getItem(X_AUTH_TOKEN),
                    },
                    body: JSON.stringify(item),
                },
            ).then((res) => res.json())

            return data
        } catch (error) {
            console.log('Ошибка запроса. Повторите позже.')
        }
    },
}
