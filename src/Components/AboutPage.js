import React from 'react'
import NavBar from './NavBar'
import Foot from './Foot'
import '../styles/about.css'

const AboutPage = () => {
    return (
        <div>
            <NavBar />
            <br></br>
            <div class='ui clearing segment'>
                <h1>ABOUT ME</h1>
                hello
            </div>
            <div class='ui clearing segment'>
                <h1>ABOUT THE APP</h1>
            </div>
            <Foot />
        </div>
    )
}

export default AboutPage