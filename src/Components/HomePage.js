import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Foot from './Foot'
import HangarCard from './HangarCard'
import NavBar from './NavBar'

const HomePage = (props) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        console.log(user)
        const token = localStorage.token
        if(!user) {
            if(localStorage.token) {
                persistUser(token)
            }
        }
    })

    const persistUser = (token) => {
        fetch('http://localhost:3000/persist', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => res.json())
        .then(data => authResponse(data))
    }

    const authResponse = (data) => {
        if(data.error) {
            alert(data.error)
        } else {
            dispatch({
                type: 'SET_USER',
                user: {
                    username: data.user,
                    id: data.id
                }
            })
        }
    }

    return (
        <Fragment>
            <NavBar />
            <HangarCard history={props.history} />
            <Foot />
        </Fragment>
    )
}

export default HomePage