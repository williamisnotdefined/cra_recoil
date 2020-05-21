import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com'
})

api.interceptors.response.use(response => response.data)

export default api
