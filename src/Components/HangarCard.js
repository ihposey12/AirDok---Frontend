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
            <div class='ui clearing segment three card grid'>
                <div onClick={() => handleClick(hangar)} class="ui special card grid">
                    <div class="ui purple card grid">
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
        <div style={{display: 'flex', flexWrap: 'wrap', padding: '25px', justifyContent: 'center', rowGap: '10px', columnGap: '15px'}}>
            {renderCard()}
        </div>
    );
}

export default HangarCard