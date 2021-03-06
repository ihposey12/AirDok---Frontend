import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Foot from './Foot'
import NavBar from './NavBar'
import Comment from './Comment'
import Button from '@material-ui/core/button'
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-daterangepicker/daterangepicker.css'
import Checkout from './Checkout'

const HangarView = () => {
    const dispatch = useDispatch()
    const hangar = useSelector(state => state.selectHangar)
    const hangars = useSelector(state => state.hangars)
    const user = useSelector(state => state.user)
    const hangarId = parseInt(window.location.pathname.split('/')[2])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    console.log(user)

    useEffect(() => {
        if(!hangar) {
            dispatch({
                type: 'SET_SELECT_HANGAR',
                selectHangar: hangars.find(hangar => hangar.id === hangarId)
            })
        }
    })

    // const postComment = (e) => {
    //     e.preventDefault()
    //     fetch('http://localhost:3000/comments', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             title: '(subject here)',
    //             description: '(what do you want to say?',
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(comment => )
    // }

    const handleSubmit = () => {
        fetch('http://localhost:3000/hangar_rentals', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                hangar_rental: {
                start_date: startDate,
                end_date: endDate,
                hangar_id: hangar.id,
                user_id: user.id
            }
            })
        })
        .then(res => res.json())
        .then(rental => {
            console.log(rental)
            dispatch({
                type: 'ADD_HANGAR_RENTAL',
                newHangarRental: rental
            })
        })
    }

    return (
    <div>
        {hangar ? 
        <div>
            <NavBar />
            <div class='ui clearing segment'>
                <h1>{hangar.title}<p>({hangar.airport_codesize})</p></h1>
                <img src={hangar.picture} alt='Selected Hangar'></img>
                <h3>{hangar.description}</h3>
                <h4><b>Size:</b> {hangar.size}</h4>
                <h4>{hangar.city}, {hangar.state}</h4>
                <h3>${hangar.price}.00/Per Day</h3>
                <Button variant='contained' color='secondary' onClick={() => setModalIsOpen(true)}>Rent</Button>
                <Modal isOpen={modalIsOpen}>
                <form>
                    <label>
                        Start Date:
                        <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)}></input>
                        <i class="calendar alternate icon" fontStyle='large'></i>
                    </label>
                    <label>
                        End Date:
                        <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)}></input>
                        <i class="calendar alternate icon" fontStyle='large'></i>
                    </label>
                    <br></br>
                    <p>(Please enter dates in 'MM/DD/YYYY' format)</p>
                </form>
                {Checkout()}
                <div>
                    <br></br>
                    <Button variant='contained' color='secondary' onClick={handleSubmit}>Confirm</Button>
                    <button onClick={() => setModalIsOpen(false)}>X</button>
                </div>
                </Modal>
            </div>
            <div>
                <Button variant='contained' color='secondary'>New Comment</Button>
            </div>
            <div class='ui clearing segment'>
                <h1>COMMENTS</h1>
                {hangar.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}
            </div>
            <Foot />
        </div>
        :
        null
}
    </div>
    )

}


export default HangarView