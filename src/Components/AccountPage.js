import React from 'react'
import NavBar from './NavBar'
import Foot from './Foot'
import PastRentals from './PastRentals'
import UserComments from './UserComments'

const AccountPage = () => {

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