import React from 'react'

const Comment = ({comment}) => {
    return (
        <div class='ui clearing segment'>
            <h4>{comment.title}</h4>
            <h5>{comment.description}</h5>
            <h5>Rating: {comment.rating}</h5>
            <br></br>
            <h6><b>Author</b>: {comment.username}</h6>
        </div>
    )
}

export default Comment