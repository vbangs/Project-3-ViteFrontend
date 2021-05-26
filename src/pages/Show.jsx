import React from 'react'
import {useState} from "react"
import { useLocation } from 'react-router'


const Show = (props) => {
    const location = useLocation()
    const {book} = location.state
    const id = book.id
    const comments = props.comments
    // const comment = commentList.find((p) => {
    //     return p._id === id
    // })

    return (
        <div className="book">
            <h1>{book.volumeInfo.title}</h1>
            <h2>{book.volumeInfo.authors[0]}</h2>
            <h2>{book.volumeInfo.authors[1]}</h2>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />
            <h4>{book.volumeInfo.description}</h4>
            <div className="comments">
                <h3>Comments:</h3>
                    <ul>
                        <li>{comments}</li>
                    </ul>
            </div>    
            <a href="/Add"><button id="add">add comment</button></a>
        </div>
    )

}


export default Show