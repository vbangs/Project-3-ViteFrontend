import React from 'react'
import {useState} from "react"
import { useLocation } from 'react-router'

const Edit = (props) => {
//Use location to get book ID prop ??and createComment function??
const location = useLocation()
const {book} = location.state
const comment = location.state.comment
const commentId = location.state.mongoId

console.log(book)
console.log(comment)
console.log(commentId)

//state for our updateComment form
const [Edit, setEdit] = useState({id: book.id, comment: comment})

console.log(Edit)
console.log(Edit.comment)

const handleChange = (event) => {
    setEdit({...Edit,[event.target.name]: event.target.value})
}

//handleSubmit when an updateComment form is submitted
const handleSubmit = (event) => {
    //to prevent refresh
    event.preventDefault()
    //update the comment
    props.editComment(Edit, commentId)
}

const removeComment = () => {
    props.deleteComment(commentId)
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                readOnly value={book.id}
                name="id"
                placeholder="id"
                className="input-hidden"/> <br />
            <textarea name="comment" id="" cols="30" rows="10" 
                value={Edit.comment} 
                placeholder="comment" 
                onChange={handleChange}
                className="input">
            </textarea>
            <br />
            <input type="submit" value="Edit Comment" class="btn btn-sm"/>
        </form>
        <button onClick={removeComment} id="delete" class="btn btn-sm">Delete Comment</button>
    </div>
)}

export default Edit