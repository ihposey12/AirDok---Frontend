import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const MainPage = () => {
    return (
        <Fragment>
            <div>
                <h1 className='app-title'>Welcome to JetPad!</h1>
            </div>
            <div>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/signup'><button>Signup</button></Link>
            </div>
        </Fragment>
    )
}

export default MainPage