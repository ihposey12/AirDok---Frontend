import React from 'react'
import NavBar from './NavBar'
import Foot from './Foot'

const UpcomingRentals = () => {
    return (
        <div>
            <NavBar />
            <div class='ui clearing segment'>
                <h1>YOUR TRIPS</h1>
                I am your upcoming dates.
            </div>
            <Foot />
        </div>
    )
}

export default UpcomingRentals