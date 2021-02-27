import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <Fragment>
            <div>
                <Link to='/home'>Home</Link>
            </div>
            <div>
                <Link to='/home/about'>About</Link>
            </div>
            <div>
                <Link to='/home/account'>Account</Link>
            </div>
        </Fragment>
    )
}

export default NavBar