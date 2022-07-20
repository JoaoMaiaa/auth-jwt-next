import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  const handlerLogin = () => {
    router.push('/login')
  }

  const handlerRegister = () => {
    router.push('/login')
  }

  return (
    <>
      <h1>Olá Mundo</h1>
      <button onClick={handlerLogin}>Login</button>
      <button onClick={handlerRegister}>Register</button>
    </>
  )
}

export default Home
