import React from 'react'
import { useSelector } from 'react-redux'
import HangarCard from './HangarCard'

const PastRentals = () => {
    const user = useSelector(state => state.user)
    
    return (
        <div>
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
    )
}

export default PastRentals