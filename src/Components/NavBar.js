import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/button'

const NavBar = () => {
    return (
        <Fragment>
            <div className='account-nav'>
                <h1 className='title'>
                    Air-Dok
                    <Button component={Link} to='/home/account'>
                        <div className='icon'>
                            <AccountCircleIcon fontSize='large'>
                                </AccountCircleIcon>
                            </div>
                    </Button>
                </h1>
                <Link to='/home/account'>
                </Link>
            </div>

            <div className='nav-bar'>
                <Button variant='contained' component={Link} color='secondary' to='/home'>Home</Button>
                <Button variant='contained' component={Link} color='secondary' to='/home/about'>About</Button>
                <div className='logout'>
                <Button variant='contained' component={Link} color='secondary' to='/home/about'>Logout</Button>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar