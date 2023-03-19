import { ResponseType } from './../types/loginType'
import { HOST } from 'shared/const/hostAPI'
import axios from 'axios'

export const authService = {
    login: async (authData: Record<string, string>) => {
        try {
            const { data } = await axios.post<ResponseType>(
                HOST + '/ru/data/v3/testmethods/docs/login',
                authData,
            )

            return data
        } catch (error) {
            console.log('Ошибка запроса. Повторите позже.')
        }
    },
}
