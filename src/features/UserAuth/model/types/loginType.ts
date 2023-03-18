export type LoginType = {
    username: string
    password: string
    isLoading?: boolean
    error?: string
}

export type Token = {
    token: string
}

export type ResponseType = {
    data: Token | null
    error_code: number
    error_message: string
}
