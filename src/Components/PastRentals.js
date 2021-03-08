import React from 'react'
import { useSelector } from 'react-redux'
import HangarCard from './HangarCard'

const PastRentals = () => {
    const user = useSelector(state => state.user)
    
    return (
        <div class='ui clearing segment' style={{display: 'flex', justifyContent: 'center'}}>
            {user ?
            <div style={{display: 'flex', justifyContent: 'center', rowGap: '1rem'}}>
                {user.hangar_rentals.map(rental => {
                    return <HangarCard hangar={rental.hangar} key={rental.hangar.id} rentaldate={rental.startDate}/>
                })}
            </div>
            :
            null
            }
        </div>
    )
}

export default PastRentals