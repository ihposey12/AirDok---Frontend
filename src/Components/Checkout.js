import React from 'react'

const Checkout = () => {
    return (
        <div>
            <form>
                <label>
                    <div class='ui clearing segment'>
                        <p>Name On Card</p>
                        <input type='text' placeholder='John Doe'></input>
                        <p>Email</p>
                        <input type='text' placeholder='johndoe@gmail.com'></input>
                        <p>Card Number</p>
                        <input type='text' placeholder='4242 4242 4242 4242'></input>
                        <p>Expiration</p>
                        <input type='text' placeholder='7/25'></input>
                        <p>3 Digit CVV</p>
                        <input type='text' placeholder='333'></input>
                        </div>
                </label>
            </form>
        </div>
    )
}
export default Checkout