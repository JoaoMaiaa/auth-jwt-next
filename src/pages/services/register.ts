import api from 'axios'

export type RegisterProps = {
  email: string
  password: string
}

const RegisterServices = {
  register: async function (params: RegisterProps) {
    return api.post('/api/register', params)
  }
}

export default RegisterServices
