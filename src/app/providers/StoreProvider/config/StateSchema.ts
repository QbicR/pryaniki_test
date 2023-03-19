import { UserType } from 'entities/User/Model/types/userType'
import { TableDataType } from 'features/TableData'
import { LoginType } from 'features/UserAuth'

export interface StateSchema {
    loginForm: LoginType
    tableData: TableDataType
    userData: UserType
}
