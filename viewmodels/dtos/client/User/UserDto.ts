export interface UserViewDto {
    id: string
    name: string
    email: string
    createdDate: Date
    roles: string[]
}

export interface UpdateUserDto {
    id: string
    name: string
}