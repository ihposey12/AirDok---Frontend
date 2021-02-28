import React from 'react'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import { Route, Router, Switch } from 'react-router'
import history from './history'
import MainPage from './Components/MainPage'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import AccountPage from './Components/AccountPage'
import Foot from './Components/Foot'

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/home/account' component={AccountPage} />
        <Route exact path='/home/about' component={AboutPage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/signup' component={(props) => <Signup {...props} />} />
        <Route exact path='/login' component={(props) => <Login {...props} />} />
        {/* <Logout /> */}
      </Switch>
      <Foot />
    </Router>
  )
}

export default App;
