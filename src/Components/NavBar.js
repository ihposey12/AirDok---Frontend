import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/button'
import { Menu } from "semantic-ui-react"
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Redirect } from 'react-router-dom'

const NavBar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.clear()
        dispatch({
            type: 'SET_USER',
            user: {}
        })
    }

    return (
        <div>
            <h1 className='title'>
                Air-Dok
            </h1>
            <div class='ui segment' style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button component={Link} to='/home/account'>
                    <AccountCircleIcon fontSize='large'>
                    </AccountCircleIcon>
                        ACCOUNT
                </Button>
            </div>
            <div class='ui clearing segment' style={{display: 'flex', justifyContent: 'center'}}>
                <div className={'ui menu'} class='ui clearing segment'>
                    <Menu secondary>
                    <Menu.Item>
                        <Button variant='contained' component={Link} color='secondary' to='/home'>Home</Button>
                        <Button variant='contained' component={Link} color='secondary' to='/home/about'>About</Button>
                        <Button variant='contained' component={Link} color='secondary' to='/home/my-rentals'>Trip Dates</Button>
                    </Menu.Item>
                    {!localStorage.token && <Redirect to='/login' />}
                        <div onClick={handleLogout} style={{display: 'flex', justifyContent: 'space-around'}}>
                            <Button>
                                <ExitToAppIcon fontSize='small'>
                                </ExitToAppIcon>
                                <p>Logout</p>
                            </Button>
                        </div>
                    </Menu>
                </div>
            </div>     
        </div>

    )
}

export default NavBar