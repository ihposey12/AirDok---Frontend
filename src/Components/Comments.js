import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Comments = () => {
    const dispatch = useDispatch()
    const hangars = useSelector(state => state.hangars)

    useEffect(() => {
        if(hangars.length === 0) {
            getHangarComments()
        }
    })

    const getHangarComments = () => {
        fetch('http://localhost:3000/hangars')
        .then(res => res.json())
        .then (hangars => {
            dispatch({
                type: 'SET_HANGARS',
                hangars: hangars
            })
        })
    }
    
    const renderComments = () => {
        return hangars.map(hangar => (
            <div>
                <div>
                    <h4>{hangar.comments.title}</h4>
                    <h5>{hangar.comments.description}</h5>
                    <h6>{hangar.comments.rating}</h6>
                </div>
            </div>
        ))
    }
    return (
        <div>
            {renderComments()}
        </div>
    )
}

export default Comments