import React from 'react'
import { useSelector } from 'react-redux'

const UserComments = () => {
    const user = useSelector(state => state.user)

    return (
        <div class='ui clearing segment'>
            <h1>ACCOUNT</h1>
            <div class='ui clearing segment'>
                <h3>{user.username}</h3>
                <h4>{user.name}</h4>
                <h4>{user.email}</h4>
                <h1>YOUR COMMENTS</h1>
                {user.comments.map(comment => (
                    <div class='ui clearing segment'>
                        <h4>{comment.title}</h4>
                        <h5>{comment.description}</h5>
                        <h6>{comment.created_at}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserComments