export interface LoginDto{
    userName: string
    passWord: string
}

export interface SignUpDto {
    email: string,
    password: string
    name: string | null
}