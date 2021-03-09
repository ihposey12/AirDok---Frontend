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
import CommentForm from './CommentForm'

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
                <br></br>
                <h2>{hangar.description}</h2>
                <br></br>
                <h3><b>Size:</b> <u>{hangar.size}</u></h3>
                <br></br>
                <h3><b>Where</b>: <u>{hangar.city}, {hangar.state}</u></h3>
                <br></br>
                <h3>${hangar.price}.00/Per Day</h3>
                <br></br>
                <Button variant='contained' color='secondary' onClick={() => setModalIsOpen(true)}>Reserve</Button>
                <br></br>
                <br></br>
                <Modal isOpen={modalIsOpen}>
                <form class='ui clearing segment' style={{display: 'flex', justifyContent: 'center'}}>
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
                </form>
                <p style={{display: 'flex', justifyContent: 'center'}}>(Please enter dates in 'MM/DD/YYYY' format)</p>
                <br></br>
                <p style={{display: 'flex', justifyContent: 'center'}}>*You are paying for the reservation of the first day. If you have a reservation with multiple days, you will not be charged the full anmount until the completion of your reservation dates.</p>
                {Checkout()}
                <h1 style={{display: 'flex', justifyContent: 'center'}}>{hangar.price}.00/Per Day</h1>
                <br></br>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant='contained' color='secondary' onClick={handleSubmit}>Confirm</Button>
                    <br></br>
                    <br></br>
                    <button onClick={() => setModalIsOpen(false)}>X</button>
                </div>
                <p>*This form is for display purposes only. Your information will not be saved.*</p>
                </Modal>
            </div>
            <br></br>
            <br></br>
            <div>
                <Button variant='contained' color='secondary'>New Comment</Button>
            </div>
            <div class='ui clearing segment'>
                <h1>COMMENTS</h1>
                {hangar.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}
            </div>
            <CommentForm />
            <Foot />
        </div>
        :
        null
}
    </div>
    )

}


export default HangarView