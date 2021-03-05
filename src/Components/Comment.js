import React from 'react'

const Comment = ({comment}) => {
    return (
        <div>
            <h4>{comment.title}</h4>
            <h5>{comment.description}</h5>
            <h6>{comment.rating}</h6>
        </div>
    )
}

export default Comment