import React, { Fragment } from 'react'
import Foot from './Foot'
import Hangars from './Hangars'
import NavBar from './NavBar'

const HomePage = (props) => {

    return (
        <Fragment>
            <NavBar />
            <Hangars history={props.history} />
            <Foot />
        </Fragment>
    )
}

export default HomePage