import axios from "axios"

type ResponseAuthAPIType = {
    error: string,
    method: string,
    url: string
}

const instance = axios.create({
        baseURL: 'https://neko-cafe-back.herokuapp.com',
    }
)

export const RequestsAPI = {
    me() {
        return instance.post<ResponseAuthAPIType>(`/auth/test`)
    }
}