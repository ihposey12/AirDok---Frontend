import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Foot from './Foot'
import { useDispatch, useSelector } from 'react-redux'
import HangarCard from './HangarCard'
import Button from '@material-ui/core/button'

const UpcomingRentals = (props) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    // const handleDelete = () => {
    //     const token = localStorage.token
    //     fetch('http:localhost:3000/', {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${token}`
    //         },
    //     })
    // }

    const handleClick = (hangar) => {
        dispatch({
            type: 'SET_SELECT_HANGAR',
            selectHangar: hangar
        })
        props.history.push(`/home/${hangar.id}`)
    }
    
    return (
        <div>
            <NavBar />
            <div class='ui clearing segment' style={{backgroundImage: 'url(https://free4kwallpapers.com/uploads/originals/2020/01/07/animated-colorful-landscape-wallpaper.jpg)'}}>
                <h4 style={{display: 'flex', justifyContent: 'center', fontSize: '40px', fontFamily: 'fantasy', fontWeight: '15px', fontStyle: 'italic', paddingTop: '10px'}}><u>UPCOMING TRIPS</u></h4>
                <br></br>
                {user ?
                <div>
                    {user.hangar_rentals?.map(rental => {
                        return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px'}}>
                                <br></br>
                                <HangarCard 
                                    hangar={rental?.hangar} 
                                    key={rental.hangar?.id}
                                    handleClick={handleClick}
                                />
                                <div style={{textAlign: 'center', backgroundColor: 'white', height: '150px', width: '200px', borderRadius: '11%', border: 'solid'}}>
                                    <h4>Arrival: {rental?.start_date}</h4>
                                    <h4>Departure: {rental?.end_date}</h4>
                                    <br></br>
                                    <Button variant='contained' color='secondary'>Cancel</Button>
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