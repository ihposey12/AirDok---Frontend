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
                {user ?
                <div className='ui clearing segment'>
                    {user.hangar_rentals.map(rental => {
                        return <HangarCard hangar={rental.hangar} key={rental.hangar.id} />
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