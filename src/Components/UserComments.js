import React from 'react'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/button'

const UserComments = () => {
    const user = useSelector(state => state.user)

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {console.log(user)}
            {user ?
        <div class='ui clearing segment'>
            <h1>ACCOUNT</h1>
            <div class='ui clearing segment' style={{margin: 'auto', width: '50%'}}>
                <h3>{user.username}</h3>
                <h4>{user.name}</h4>
                <h4>{user.email}</h4>
                <Button variant='contained' color='secondary'>Edit</Button>
                <Button variant='contained' color='secondary'>Delete</Button>
            </div>
            <br></br>
            <br></br>
            <div>
            <h1>YOUR COMMENTS</h1>
                {user.comments?.map(comment => (
                    <div class='ui clearing segment'>
                        <h4>{comment.title}</h4>
                        <h5>{comment.description}</h5>
                        <h6>{comment.created_at}</h6>
                        <Button variant='contained' color='secondary'>Edit</Button>
                        <Button variant='contained' color='secondary'>Delete</Button>
                    </div>
                ))}
            </div>
        </div>
        :
        null
                }
        </div>
    )
}

export default UserComments