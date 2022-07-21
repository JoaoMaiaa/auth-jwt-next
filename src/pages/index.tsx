import { NextPage } from 'next'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <>
      <h1>Olá Mundo</h1>
      <div>
        <Link href="/login">Login</Link> <Link href="/register">Register</Link>
      </div>
    </>
  )
}

export default Index
