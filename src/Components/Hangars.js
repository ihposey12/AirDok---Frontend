import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HangarCard from './HangarCard'
import '../store/reducers.js'

const Hangars = (props) => {
    const dispatch = useDispatch()
    const hangars = useSelector(state => state.hangars)

    // useEffect(() => {
    //     if(hangars.length === 0) {
    //         getHangars()
    //     }
    // })

    // const getHangars = () => {
    //     fetch('http://localhost:3000/hangars')
    //     .then(res => res.json())
    //     .then(hangars => {
    //     dispatch({
    //         type: 'SET_HANGARS',
    //         hangars: hangars
    //     })})
    // }

    const handleClick = (hangar) => {
        dispatch({
            type: 'SET_SELECT_HANGAR',
            selectHangar: hangar
        })
        props.history.push(`/home/${hangar.id}`)
    }

    const renderCard = () => {
        return hangars.map(hangar => (
            <HangarCard hangar={hangar} key={hangar.id} handleClick={handleClick} />
    ))}

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', padding: '25px', justifyContent: 'center', rowGap: '14px', columnGap: '1px', backgroundImage: 'url(https://free4kwallpapers.com/uploads/originals/2020/01/07/animated-colorful-landscape-wallpaper.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            {renderCard()}
        </div>
    );
}

export default Hangars