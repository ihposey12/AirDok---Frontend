import React from 'react'
import { Route, Router, Switch } from 'react-router'
import { connect } from 'react-redux'
import history from './history'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import MainPage from './Components/MainPage'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import AccountPage from './Components/AccountPage'
import HangarView from './Components/HangarView'
import UpcomingRentals from './Components/UpcomingRentals'
import RentDates from './Components/RentDates'

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/home/rent' component={RentDates} />
        <Route exact path='/home/my-rentals' component={UpcomingRentals} />
        <Route exact path='/home/hangar-view' component={HangarView} />
        <Route exact path='/home/account' component={AccountPage} />
        <Route exact path='/home/about' component={AboutPage} />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/home' component={(props) => <HomePage {...props} />} />
        <Route exact path='/signup' component={(props) => <Signup {...props} />} />
        <Route exact path='/login' component={(props) => <Login {...props} />} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(App);
