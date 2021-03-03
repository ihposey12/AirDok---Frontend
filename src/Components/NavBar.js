import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/button'
import { Menu } from "semantic-ui-react"

const NavBar = () => {
    return (
        <div>
            <h1 className='title'>
                Air-Dok
            </h1>
            <div class='ui clearing segment'>
                <div className={'ui menu'}>
                    <Menu secondary>
                    <Menu.Item>
                        <Button variant='contained' component={Link} color='secondary' to='/home'>Home</Button>
                        <Button variant='contained' component={Link} color='secondary' to='/home/about'>About</Button>
                    </Menu.Item>
                        <div class='ui segment'>
                            <Button component={Link} to='/home/account'>
                                <AccountCircleIcon fontSize='large'>
                                </AccountCircleIcon>
                            </Button>
                        </div>
                    </Menu>
                </div>
            </div>     
        </div>

    )
}

export default NavBar