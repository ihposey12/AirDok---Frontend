import React, { Fragment } from 'react'

const MainPage = () => {
    return (
        <Fragment>
            <div>
                <h1 className='app-title'>Welcome to JetPad!</h1>
            </div>
            <div>
                <button>Login</button>
                <button>Signup</button>
            </div>
        </Fragment>
    )
}

export default MainPage