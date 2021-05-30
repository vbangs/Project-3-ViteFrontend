import React from 'react'
import {useState} from "react"
<<<<<<< HEAD
=======

const Add = (props) => {
    //Use location to get book ID prop ??and createComment function??
    // const location = useLocation()
    // const {id} = location.state

    //state set up for form
    const [newForm, setNewForm] = useState({
        comment: ""
    })

    //handle change function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    //handle submit to create new comment
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createComment(newForm)
        setNewForm({
            comment: ""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
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
>>>>>>> a508c975ecfa148463e50fdc3a9769f707f40105
