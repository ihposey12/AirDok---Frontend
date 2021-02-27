import React from 'react'
import NavBar from './NavBar'
// import {Switch, Route} from 'react-router'
// import HomePage from './HomePage'
// import AccountPage from './AccountPage'
// import AboutPage from './AboutPage'

const AppHeader = () => {
    return (
        <div>
            <h1>Jet-Dock</h1>
            <NavBar />
            {/* <Switch>
                <Route path='/home/about' component={AboutPage} />
                <Route path='/home/account' component={AccountPage} />
                <Route component={HomePage} />
            </Switch> */}
        </div>
    )
}

export default AppHeader