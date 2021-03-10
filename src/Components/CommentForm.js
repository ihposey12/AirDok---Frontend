import React from 'react'
import Button from '@material-ui/core/button'
import { useDispatch, useSelector } from 'react-redux'

const CommentForm = (props) => {
    const user = useSelector(state => state.user)
    const commentTitle = useSelector(state => state.commentTitle)
    const commentDescription = useSelector(state => state.commentDescription)
    const commentRating = useSelector(state => state.commentRating)
    const dispatch = useDispatch()

    const handlePost = () => {
        console.log(props.hangar.id)
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                comment: {
                    title: commentTitle,
                    description: commentDescription,
                    rating: commentRating,
                    user_id: user?.id,
                    hangar_id: props.hangar?.id,
            }})
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
        props.setCommentFormOpen(false)
    }

    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="title">Subject</label>
                    <input onChange={(e) => dispatch({
                        type: 'SET_COMMENT_TITLE',
                        commentTitle: e.target.value,
                    })} type="title" class="form-control" id="exampleFormControlInput1" placeholder="Awesome!" />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea onChange={(e) => dispatch({
                        type: 'SET_COMMENT_DESCRIPTION',
                        commentDescription: e.target.value
                    })} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='What would you like to say?'></textarea>
                </div>
                <div class="form-group">
                    <label for="rating">Rating</label>
                    <select onChange={(e) => dispatch({
                        type: 'SET_COMMENT_RATING',
                        commentRating: e.target.value
                    })} class="form-control" id="exampleFormControlSelect1">
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>
                <Button onClick={handlePost} variant='contained' color='secondary'>Post</Button>
            </form>
        </div>
    )
}

export default CommentForm