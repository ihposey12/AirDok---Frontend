import React from 'react'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
// import Logout from './Auth/Logout'
import {Route, Router} from 'react-router'
import history from './history'
import MainPage from './Components/MainPage'

const App = () => {
  return (
    <Router history={history}>

      <div className='main-page'>
        <MainPage />
      </div>

      <Route exact path='/signup' component={(props) => <Signup {...props} />} />
      <Route exact path='/login' component={(props) => <Login {...props} />} />
      {/* <Logout /> */}
    </Router>
  )
}

export default App;
