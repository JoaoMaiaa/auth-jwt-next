import { FormEventHandler, useState } from 'react'
import { useRouter } from 'next/router'

import RegisterServices from './services/register'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      await RegisterServices.register({
        email: email,
        password: password
      })
      // const getResult = await axios
      //   .post('/api/login', { email, password })
      //   .then((result) => result.data)
      setEmail('')
      setPassword('')
      router.push('/login')
    } catch (error) {
      console.log(error)
      // setError(true)
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginLeft: '20px' }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginLeft: '20px' }}
          />
        </div>
        <button type="submit" style={{ marginTop: '20px', cursor: 'pointer' }}>
          Enviar
        </button>
      </form>
    </>
  )
}
