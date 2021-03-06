import React, { useEffect } from 'react'
import { Route, Router, Switch } from 'react-router'
import { connect, useDispatch, useSelector } from 'react-redux'
import history from './history'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import MainPage from './Components/MainPage'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import AccountPage from './Components/AccountPage'
import HangarView from './Components/HangarView'
import UpcomingRentals from './Components/UpcomingRentals'

const App = () => {
  const dispatch = useDispatch()
  const hangars = useSelector(state => state.hangars)
  const user = useSelector(state => state.user)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(hangars.length === 0) {
      getHangars()
    }
    
    if(token) {
      fetch('http://localhost:3000/persist', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch({
        type: 'SET_USER',
        user: data.user
        })})
    }
  }, [])

  const getHangars = () => {
    fetch('http://localhost:3000/hangars')
    .then(res => res.json())
    .then(hangars => {
      if (!hangars.error) {
        dispatch({
        type: 'SET_HANGARS',
        hangars: hangars
    })
      }
  })
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/home/account' component={AccountPage} />
        <Route exact path='/home/about' component={AboutPage} />
        <Route exact path='/home/my-rentals' component={UpcomingRentals} />
        <Route exact path='/home/:id' component={HangarView} />
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
