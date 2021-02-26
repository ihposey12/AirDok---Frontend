import React from 'react'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
// import Logout from './Auth/Logout'
import {Route, Router, Switch} from 'react-router'
import history from './history'
import MainPage from './Components/MainPage'
import Application from './Components/Application'
// import { selectUser } from './features/userSlice'

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/app' component={Application} />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/signup' component={(props) => <Signup {...props} />} />
        <Route exact path='/login' component={(props) => <Login {...props} />} />
        {/* <Logout /> */}
      </Switch>
    </Router>
  )
}

export default App;
