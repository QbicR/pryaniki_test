export type ResponseDataType = {
    id?: string
    companySigDate: string
    companySignatureName: string
    documentName: string
    documentStatus: string
    documentType: string
    employeeNumber: string
    employeeSigDate: string
    employeeSignatureName: string
}

export type ResponseType = {
    data: ResponseDataType[] | null
    error_code: number
    error_message: string
}

export type ResponseChangeType = {
    data: ResponseDataType
    error_code: number
    error_message: string
}

export type TableDataType = {
    data: ResponseDataType[]
    isLoading: boolean
    error: string
}
