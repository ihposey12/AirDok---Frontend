import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/button'

const UserComments = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleDelete = (user) => {
        const token = localStorage.token
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
            localStorage.clear('token', 'user')
            window.location.href = '/'
            alert('Your account has been deleted.')
    }

    const commentDelete = (comment) => {
        const token = localStorage.token
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'SET_USER',
                user: data.user
            })
            dispatch({
                type: 'SET_SELECT_HANGAR',
                selectHangar: data.hangar
            })
            dispatch({
                type: 'UPDATE_HANGARS',
                hangar: data.hangar
            })
        })
        alert('Your comment has been deleted!')
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <br></br>
            {user ?
        <div class='ui clearing segment'>
            <h1>ACCOUNT</h1>
            <div class='ui clearing segment' style={{margin: 'auto', width: '250px'}}>
                <h3>{user.username}</h3>
                <h4>{user.name}</h4>
                <h4>{user.email}</h4>
                <Button onClick={() => handleDelete(user)} variant='contained' color='secondary'>Delete</Button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
            <h1>YOUR COMMENTS</h1>
                {user.comments?.map(comment => (
                    <div class='ui clearing segment' style={{width: '600px', height: '250px'}}>
                        <h4>{comment.title}</h4>
                        <h5>{comment.description}</h5>
                        <h5>Rating: {comment.rating}</h5>
                        <br></br>
                        <h6>User: {comment.username}</h6>
                        <br></br>
                        <Button onClick={() => commentDelete(comment)} variant='contained' color='secondary'>Delete</Button>
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