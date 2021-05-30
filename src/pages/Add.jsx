import React from 'react'
import {useState} from "react"
import { useLocation } from 'react-router'

const Add = (props) => {
    //Use location to get book ID prop ??and createComment function??
    const location = useLocation()
    const {book} = location.state

    //state set up for form
    const [newForm, setNewForm] = useState({
        id: book.id,
        comment: ""
    })

    //handle change function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    //handle submit to create new comment
    const handleSubmit = (event) => {
        event.preventDefault()
        props.addComment(newForm, book.id)
        setNewForm({
            id: "",
            comment: ""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                readOnly value={book.id}
                name="id"
                placeholder="id"/>
            <input
                type="text"
                value={newForm.comment}
                name="comment"
                placeholder="Add comment"
                onChange={handleChange} />
            <input type="submit" value="add comment" />
        </form>
    )
}

export default Add;
