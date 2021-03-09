import React, { Fragment } from 'react'
import Foot from './Foot'
import Hangars from './Hangars'
import NavBar from './NavBar'
import '../App.css'

const HomePage = (props) => {

    return (
        <Fragment style={{backgroundColor: 'lightgray'}}>
            <NavBar />
            <br></br>
            <br></br>
            <div class='home-title' style={{display: 'flex', justifyContent: 'center', backgroundColor: 'lightgray'}}>
                <h1 style={{fontSize: '40px', fontFamily: 'fantasy', fontStyle: 'italic', fontWeight: '15px'}}><u>HANGARS</u></h1>
            </div>
            <Hangars history={props.history} />
            <Foot />
        </Fragment>
    )
}

export default HomePage