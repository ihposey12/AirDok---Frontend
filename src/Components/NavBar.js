import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <Fragment>
            <div>
                <Link to='/app'>Home</Link>
            </div>
            <div>
                <Link to='/app/about'>About</Link>
            </div>
            <div>
                <Link to='/app/account'>Account</Link>
            </div>
        </Fragment>
    )
}

export default NavBar