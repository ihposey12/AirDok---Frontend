import React from 'react'
import Foot from './Foot'
import Hangars from './Hangars'
import NavBar from './NavBar'
import '../App.css'

const HomePage = (props) => {

    return (
        <div style={{backgroundColor: 'black'}}>
            <NavBar />
            <Hangars history={props.history} />
            <Foot />
        </div>
    )
}

export default HomePage