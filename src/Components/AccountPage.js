import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar'
import Foot from './Foot'
import PastRentals from './PastRentals'
import UserComments from './UserComments'

const AccountPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        const token = localStorage.getItem('token')

        console.log(user)
        if(!user) {
        if(token) {
          fetch('http://localhost:3000/persist', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            dispatch({
            type: 'SET_USER',
            user: data.user
            })})
        }}
      })

    return (
        <div>
            <NavBar />
            <UserComments />
            <PastRentals />
            <Foot />
        </div>
    )
}

export default AccountPage