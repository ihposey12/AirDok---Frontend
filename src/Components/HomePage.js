import React, { Fragment } from 'react'
import Foot from './Foot'
import HangarCard from './HangarCard'
import NavBar from './NavBar'

const HomePage = (props) => {

    return (
        <Fragment>
            <NavBar />
            <HangarCard history={props.history} />
            <Foot />
        </Fragment>
    )
}

export default HomePage