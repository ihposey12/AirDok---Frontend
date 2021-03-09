import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HangarCard from './HangarCard'
import '../store/reducers.js'

const Hangars = (props) => {
    const dispatch = useDispatch()
    const hangars = useSelector(state => state.hangars)

    const handleClick = (hangar) => {
        dispatch({
            type: 'SET_SELECT_HANGAR',
            selectHangar: hangar
        })
        props.history.push(`/home/${hangar.id}`)
    }

    const renderCard = () => {
        return hangars.map(hangar => (
            <HangarCard hangar={hangar} key={hangar.id} handleClick={() => handleClick(hangar)} />
    ))}

    return (
        <div class='ui clearing segment' style={{backgroundImage: 'url(https://free4kwallpapers.com/uploads/originals/2020/01/07/animated-colorful-landscape-wallpaper.jpg'}}>
            <div class='home-title' style={{display: 'flex', justifyContent: 'center'}}>
                <h1 style={{fontSize: '40px', fontFamily: 'fantasy', fontStyle: 'italic', fontWeight: '15px'}}><u>HANGARS</u></h1>
            </div>
            <br></br>
            <div style={{display: 'flex', flexWrap: 'wrap', padding: '25px', justifyContent: 'center', rowGap: '14px', columnGap: '1px', backgroundImage: 'url(https://free4kwallpapers.com/uploads/originals/2020/01/07/animated-colorful-landscape-wallpaper.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', border: 'solid 10px'}}>
                {renderCard()}
            </div>
        </div>
    );
}

export default Hangars