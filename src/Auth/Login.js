import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.history.push('/')
        dispatch(login({
            name: username,
            password: password,
            loggedIn: true
        }))
    }

    return (
        <div className='login'>
            <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>

                <input 
                    type='username' 
                    placeholder='Username' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />

                <input 
                    type='password' 
                    placeholder='Password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleSubmit} type='submit' className='login-submit'>Login</button>
            </form>
        </div>
    )
}

export default Login