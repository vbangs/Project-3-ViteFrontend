import React from 'react'
import {useState} from "react"
import { useLocation } from 'react-router'


const Show = (props) => {
    const location = useLocation()
    const {book} = location.state
    // const id = props.match.params.id
    // // copied from people app
    // const books = props.books
    // const book = books.find((p) => {
    //     return p._id === id
    // })

    // // state for book
    // const [editForm, setEditForm] = useState(book)

    // // handleChange function for comments form
    // const handleChange = (event) => {
    //     setEditForm({
    //         ...editForm,
    //         [events.target.names]: event.target.value
    //     })
    // }

    // // handleSubmit for book
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     props.updateBooks(editForm, book._id)
    //     props.history.push("/show")
    // }

    return (
        <div className="book">
            <h1>{book.volumeInfo.title}</h1>
            <h2>{book.volumeInfo.authors[0]}</h2>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />
            <a href="/Details"><button id="details"></button></a>
        
        </div>
    )

}


export default Show