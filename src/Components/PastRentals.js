import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Foot from './Foot'
import NavBar from './NavBar'

const PastRentals = () => {
    const user = useSelector(state => state.user)
    
    return (
        <div>
            <NavBar />
            <div class='ui clearing segment' style={{backgroundImage: 'url(https://free4kwallpapers.com/uploads/originals/2020/01/07/animated-colorful-landscape-wallpaper.jpg)'}}>
                <br></br>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <h1 style={{textAlign: 'center', fontSize: '40px', fontFamily: 'fantasy', fontWeight: '450px', fontStyle: 'italic'}}><u>RESERVAION HISTORY</u></h1>
                    <br></br>
                    {user ?
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', rowGap: '1rem'}} >
                        {user.hangar_rentals?.map(rental => {
                            // return <HangarCard hangar={rental.hangar} key={rental.hangar.id} />
                            return <div class='ui clearing segment'>
                                <Link to={`/home/${rental.hangar.id}`}><h4>{rental.hangar.title}</h4></Link>
                                <br></br>
                                Arrived: {rental.start_date}
                                <br></br>
                                Departed: {rental.end_date}
                            </div>
                        })}
                    </div>
                    :
                    null
                    }
                </div>
            </div>
            <Foot />
        </div>
    )
}

export default PastRentals