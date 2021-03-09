import React from 'react'
import Button from '@material-ui/core/button'

const CommentForm = () => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="title">Subject</label>
                    <input type="title" class="form-control" id="exampleFormControlInput1" placeholder="Awesome!" />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="rating">Rating</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <Button variant='contained' color='secondary'>Post</Button>
            </form>
        </div>
    )
}

export default CommentForm