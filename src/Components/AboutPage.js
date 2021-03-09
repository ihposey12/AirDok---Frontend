import React from 'react'
import NavBar from './NavBar'
import Foot from './Foot'
import '../styles/about.css'

const AboutPage = () => {
    return (
        <div>
            <NavBar />
            <br></br>
            <div class='ui clearing segment' style={{backgroundImage: 'url(https://free4kwallpapers.com/uploads/originals/2020/01/07/animated-colorful-landscape-wallpaper.jpg)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h1 className='about'><u>ABOUT THE APP</u></h1>
                <p className='about-app' style={{display: 'flex', justifyContent: 'center'}}>This Application helps to connect private pilots/passengers with Airplane Hangars that are privately owned and priced. This app aims to eliminate the need to reserve a hangar through the FBO at regional airports, which can be very costly. We at Air-Dok hope to help benefit both users and sellers alike by connecting them with an easy to use, fun application. We truly hope you enjoy the our app and hope to add more features in the near future. Be sure to check out the footer at the bottom of the page to see more from the developer!</p>
            </div>
            <div>
                <p>*This application is in beta form. More features will be added in the comming months, aiming for completion by the end of the year*</p>
            </div>
            <Foot />
        </div>
    )
}

export default AboutPage