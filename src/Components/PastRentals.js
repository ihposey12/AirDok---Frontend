import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PastRentals = () => {
    const user = useSelector(state => state.user)
    
    return (
        <div>
            <br></br>
                <h1 style={{display: 'flex', justifyContent: 'center'}}>Past Reservations</h1>
            <div class='ui clearing segment' style={{display: 'flex', justifyContent: 'center'}}>
                {user ?
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', rowGap: '1rem'}}>
                    {user.hangar_rentals?.map(rental => {
                        // return <HangarCard hangar={rental.hangar} key={rental.hangar.id} />
                        return <div class='ui clearing segment'>
                            <br></br>
                            <Link to={rental.hangar.id}><h4>{rental.hangar.title}</h4></Link>
                            <br></br>
                            Arrive: {rental.start_date}
                            <br></br>
                            Depart: {rental.end_date}
                        </div>
                    })}
                </div>
                :
                null
                }
            </div>
        </div>
    )
}

export default PastRentals