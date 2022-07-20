import api from 'axios'

export type LoginProps = {
  email: string
  password: string
}

const LoginServices = {
  login: async function (params: LoginProps) {
    const response = await api.post('/api/login', params)
    localStorage.setItem('user', response.data.email)
    localStorage.setItem('token', response.data.token)
  }
}

export default LoginServices
