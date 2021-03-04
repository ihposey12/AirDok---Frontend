import React from 'react'
import { useSelector } from 'react-redux'
import Foot from './Foot'
import NavBar from './NavBar'
import Comments from './Comments'
import Button from '@material-ui/core/button'
import { Link } from 'react-router-dom'

const HangarView = () => {
    const hangar = useSelector(state => state.selectHangar)

    return (
        <div class='ui clearing segment'>
            <NavBar />
            <h1>{hangar.title}<p>({hangar.airport_codesize})</p></h1>
            <img src={hangar.picture} alt='Selected Hangar'></img>
            <h3>{hangar.description}</h3>
            <h4><b>Size:</b> {hangar.size}</h4>
            <h4>{hangar.city}, {hangar.state}</h4>
            <h3>${hangar.price}.00/Per Day</h3>
            <Button variant='contained' component={Link} color='secondary' to='/home/rent'>Rent</Button>
            <Comments />
            <Foot />
        </div>
    )

}


export default HangarView