import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInAnonymously } from 'firebase/auth'

export default function Login() {
    const login = () => {
        signInAnonymously(getAuth()).then((usuario) => console.log(usuario));
    }
  return (
    <div>
        <div>Login</div>
        <Button type='primary' onClick={login}>
            <Link to='/notes'>Iniciar sesión</Link>
        </Button>
    </div>
  )
}
