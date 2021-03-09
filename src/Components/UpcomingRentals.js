import React from 'react'
import NavBar from './NavBar'
import Foot from './Foot'
import { useSelector } from 'react-redux'
import HangarCard from './HangarCard'

const UpcomingRentals = () => {
    const user = useSelector(state => state.user)
    
    return (
        <div>
            <NavBar />
            <div class='ui clearing segment'>
                <br></br>
                <h4 style={{display: 'flex', justifyContent: 'center', fontSize: '40px', fontFamily: 'fantasy', fontWeight: '15px', fontStyle: 'italic'}}><u>UPCOMING TRIPS</u></h4>
                {user ?
                <div>
                    {user.hangar_rentals?.map(rental => {
                        return <div class='ui clearing segment' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <br></br>
                                <HangarCard 
                                    hangar={rental.hangar} 
                                    key={rental.hangar?.id}
                                />
                                <div class='ui clearing segment'>
                                    <h4>Arrival: {rental.start_date}</h4>
                                    <h4>Departure: {rental.end_date}</h4>
                                    <br></br>
                                </div>
                            </div>
                    })}
                </div>
                :
                null
                }   
            </div>
            <Foot />
        </div>
    )
}

export default UpcomingRentals