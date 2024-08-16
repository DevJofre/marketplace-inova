let userId:string | null = null
export const setLoggedUser = (id: string): void => {
    userId = id
}
export const getLoggedUser = (): string => {
    return String(userId)
}
