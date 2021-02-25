import React, { useState } from 'react'

const Signup = (props) => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.history.push('/')
    }

    return (
        <div className='signup'>
            <form className='signup-form'>
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

                <button onClick={handleSubmit} type='submit' className='signup-submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signup