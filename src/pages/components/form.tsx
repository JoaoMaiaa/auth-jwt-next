import { FormEventHandler } from 'react'

export type Props = {
  email: FormEventHandler<HTMLFormElement>
  password: FormEventHandler<HTMLFormElement>
  handleSubmit: FormEventHandler<HTMLFormElement>
  handleEmail: FormEventHandler<HTMLFormElement>
  handlePassword: FormEventHandler<HTMLFormElement>
}

const Form = ({
  email,
  password,
  handleSubmit,
  handleEmail,
  handlePassword
}: Props) => {
  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => handleEmail(e.target.value)}
            style={{ marginLeft: '20px' }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => handlePassword(e.target.value)}
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

export default Form
