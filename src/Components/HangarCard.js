import React from 'react'

const HangarCard = ({hangar, handleClick}) => {
    return (
        <div class='three column grid' style={{paddingLeft: '5%'}}>
                <div onClick={() => handleClick(hangar)} class="ui special cards">
                    <div class="ui purple card" style={{border: 'solid'}}>
                        <div class="blurring dimmable image ui blurring image">
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
                            <div>
                                <u>${hangar.price}.00/Per Day</u>
                            </div>
                            <br></br>
                            <div class="meta">
                                <span class="date">{hangar.city}, {hangar.state}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HangarCard