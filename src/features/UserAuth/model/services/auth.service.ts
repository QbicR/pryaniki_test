import { ResponseType } from './../types/loginType'
import { HOST } from 'shared/const/hostAPI'

export const authService = {
    login: async (authData: Record<string, string>) => {
        try {
            const data: ResponseType = await fetch(HOST + '/ru/data/v3/testmethods/docs/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(authData),
            }).then((res) => res.json())

            return data
        } catch (error) {
            console.log('Ошибка запроса. Повторите позже.')
        }
    },
}
