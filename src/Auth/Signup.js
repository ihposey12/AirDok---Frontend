import React, { useState } from 'react'
import axios from 'axios'

const Signup = (props) => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        // props.history.push('/')
        const payload = {
            name,
            username,
            email,
            password,
        }
        axios.post('http://localhost:3000/signup', payload)
            .then(res => {
                console.log(res)
                if(res.data.error) {
                    setError(res.data.error)
                }
            })
    }

    return (
        <div className='signup'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h1>Signup Here</h1>

                <input 
                    type='name'
                    placeholder='First and Last Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input 
                    type='username' 
                    placeholder='Username' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />

                <input 
                    type='email'
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type='password' 
                    placeholder='Password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit' className='signup-submit'>Submit</button>
            </form>
            {error}
        </div>
    )
}

export default Signup