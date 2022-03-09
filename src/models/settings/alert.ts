export interface IAlert{
    type: 'primary' | 'success' | 'warning' | 'danger',
    message: string,
    id: string ,
    timeout: number | null
}