import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Login = (props) => {
    const dispatch = useDispatch()
    const usernameInput = useSelector(state => state.usernameInput)
    const passwordInput = useSelector(state => state.passwordInput)
    const api = 'http://localhost:3000/'

    const handleSubmit = (e) => {
        e.preventDefault()
        props.history.push('/')
        fetch(api + 'login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username: usernameInput,
                password: passwordInput
            })
        })
        .then(data => authResponse(data))
    }

    const authResponse = (data) => {
        if(data.error) {
            alert(data.error)
        } else {
            const token = data.token
            localStorage.token = token
            dispatch({
                type: 'SET_USER',
                user: {
                    username: data.username,
                    id: data.id
                }
            })
            props.history.push('/home')
        }
    }

    return (
        <div className='login'>
            <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>

                <input 
                    label='Username' 
                    placeholder='Username'
                    name='username'
                    onChange={(e) => dispatch({
                        type: 'CHANGE_USERNAME_INPUT',
                        value: e.target.value
                    })} 
                />

                <input 
                    label='password' 
                    placeholder='Password' 
                    name='password'
                    onChange={(e) => dispatch({
                        type: 'CHANGE_PASSWORD_INPUT',
                        value: e.target.value
                    })}
                />

                <button onClick={(e) => handleSubmit(e)} type='submit' className='login-submit'>Login</button>
                <p>
                    Don't Have An Account?
                    <Link to='/signup'>
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login