import { useEffect, useState } from 'react'

const Auth = () => {
  const [data, setData] = useState('')
  useEffect(() => {
    setData(localStorage.getItem('token') as string)
  }, [])
  return <>{data ? <h1>Autenticado</h1> : <h1>Não autenticado</h1>}</>
}

export default Auth
