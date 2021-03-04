import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Foot from './Foot'
import NavBar from './NavBar'
import Comments from './Comments'
import Button from '@material-ui/core/button'
import Modal from 'react-modal'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-daterangepicker/daterangepicker.css'

const HangarView = (props) => {
    const hangar = useSelector(state => state.selectHangar)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div class='ui clearing segment'>
            <NavBar />
            <h1>{hangar.title}<p>({hangar.airport_codesize})</p></h1>
            <img src={hangar.picture} alt='Selected Hangar'></img>
            <h3>{hangar.description}</h3>
            <h4><b>Size:</b> {hangar.size}</h4>
            <h4>{hangar.city}, {hangar.state}</h4>
            <h3>${hangar.price}.00/Per Day</h3>
            <Button variant='contained' color='secondary' onClick={() => setModalIsOpen(true)}>Rent</Button>
            <Modal isOpen={modalIsOpen}>
            <DateRangePicker initialSettings={{ startDate: '3/1/2021', endDate: '3/5/2021' }}>
                <Button variant='contained' color='secondary'>Select Dates</Button>
            </DateRangePicker>
            <i class="calendar alternate icon" fontStyle='large'></i>
                <button>Confirm</button>
                <button onClick={() => setModalIsOpen(false)}>X</button>
            </Modal>
            <Comments />
            <Foot />
        </div>
    )

}


export default HangarView