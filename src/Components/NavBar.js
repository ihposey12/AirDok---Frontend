import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import '../styles/navbar.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/button'
import { Menu } from "semantic-ui-react"
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import '../App.css'

const NavBar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const handleLogout = () => {
        localStorage.clear()
        dispatch({
            type: 'SET_USER',
            user: {}
        })
    }

    return (
        <div style={{backgroundImage: 'url(https://media3.giphy.com/media/4N1FZFE5AGO3qrUGkw/source.gif)', paddingTop: '120px', border: 'solid 5px', backgroundRepeat: 'repeat', backgroundSize: 'cover'}}>
            <h1 className='title'>
                <Link to='/home' style={{color: 'black'}}>Air-Dok</Link>
            </h1>
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: '25px', alignContent: 'center'}}>
                    <Menu secondary>
                        <Menu.Item style={{columnGap: '5%', backgroundColor: 'darkgrey'}}>
                            <Button variant='contained' component={Link} color='secondary' to='/home' size='large'>       HOME       </Button>
                            <Button variant='contained' component={Link} color='secondary' to='/home/about' size='large'>       ABOUT       </Button>
                            <Button variant='contained' component={Link} color='secondary' to='/home/my-rentals' size='large'>       TRIPS       </Button>
                            <Button variant='contained' component={Link} color='secondary' to='/home/history' size='large'>History</Button>
                        </Menu.Item>
                    </Menu>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '250px'}}>
                    <Button component={Link} to='/home/account'>
                        <AccountCircleIcon fontSize='inherit' style={{fontSize: '40px'}}>
                        </AccountCircleIcon>
                            <p style={{fontWeight: 'bold', fontSize: '15px'}}>{user?.username}</p>
                    </Button>
                </div>
                {!localStorage.token && <Redirect to='/login' />}
                <div onClick={handleLogout} style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '25px', textDecoration: 'underline'}}>
                    <Button>
                        <ExitToAppIcon fontSize='large'>
                        </ExitToAppIcon>
                        <p>Logout</p>
                    </Button>
                </div>
        </div>
    )
}

export default NavBar