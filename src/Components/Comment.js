import React from 'react'

const Comment = ({comment}) => {
    return (
        <div>
            <br></br>
            <h4>{comment.title}</h4>
            <br></br>
            <h5>{comment.description}</h5>
            <br></br>
            <h6>Rating: {comment.rating}</h6>
        </div>
    )
}

export default Comment