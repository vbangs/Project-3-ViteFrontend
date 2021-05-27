import React from 'react'
import {useState} from "react"

function Edit(commentText) {
    this.setState({commentText: comment.text.target.value})


//state for our updateComment form
const [Edit, setEdit] = useState(commentText)
setEdit({
    ...Edit,
    [event.target.comment]: event.target.text
})

//handleSubmit when an updateComment form is submitted
const handleSubmit = (event) => {
    //to prevent refresh
    event.preventDefault()
    //update the comment
    commentText.updateComment(Edit, comment._id)
    //redirect to index page
    PaymentResponse.history.push("/")
}

const removeComment = () => {
    commentText.deleteComment(comment._id)
    commentText.history.push("/")
}

return (
<div>
    <h1>{book.volumeInfo.title}</h1>
    <h3>{book.volumeInfo.authors}</h3>
    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.imageLinks.thumbnail}/>
    <textarea name="Comments" id="" cols="30" rows="10"></textarea>
</div>
)}

export default Edit