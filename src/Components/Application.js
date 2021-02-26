import React from 'react'
import NavBar from './NavBar'
import {Switch, Route} from 'react-router'
import HomePage from './HomePage'
import AccountPage from './AccountPage'
import AboutPage from './AboutPage'

export default function Application() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path='/app/about' component={AboutPage} />
                <Route path='/app/account' component={AccountPage} />
                <Route component={HomePage} />
            </Switch>
            Footer
        </div>
    )
}