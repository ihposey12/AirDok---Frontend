import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../store/reducers.js'

const HangarCard = (props) => {
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
            <div class='three column grid' style={{paddingLeft: '5%'}}>
                <div onClick={() => handleClick(hangar)} class="ui special cards">
                    <div class="ui purple card" style={{border: 'solid'}}>
                        <div class="blurring dimmable image ui blurring image segment">
                            <div class="ui inverted dimmer">
                                <div class="content">
                                    <div class="center">
                                        <div class="ui primary button">See More</div>
                                    </div>
                                </div>
                            </div>
                            <img src={hangar.picture} alt='Airplane Hangar' />
                        </div>
                        <div class="content">
                            <h2 class="header">{hangar.title}</h2>
                            <div class="meta">
                                <span class="date">{hangar.city}, {hangar.state}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    ))}

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', padding: '25px', justifyContent: 'center', rowGap: '14px', columnGap: '1px', backgroundImage: 'url(https://free4kwallpapers.com/uploads/originals/2020/01/07/animated-colorful-landscape-wallpaper.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            {renderCard()}
        </div>
    );
}

export default HangarCard