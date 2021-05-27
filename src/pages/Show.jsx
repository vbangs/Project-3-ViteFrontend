import React, { useEffect } from 'react'
import {useState} from "react"
import { useLocation } from 'react-router'
import Add from "./Add"
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';


const Show = (props) => {
    const location = useLocation()
    const {book} = location.state
    const id = book.id


    const [comments, setComments] = useState(null)

    const URL = "https://notebooks3.herokuapp.com/books"

    const getComments = async () => {
        const response = await fetch(URL)
        const data = await response.json()

        const bookDataById = (data) => {
            return data.id === book.Id
        }

        const bookData = data.find(bookDataById)

        setComments(bookData)
        console.log(data)
        console.log(bookData)
    }

    const addComment = async (comment) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        getComments()
    }

    useEffect(() => {
        getComments()
    }, [])

    const loaded = () => {
        return(
            <div className="book">
                <h1>{book.volumeInfo.title}</h1>
                <h2>{book.volumeInfo.authors[0]}</h2> 
                <h2>{book.volumeInfo.authors[1]}</h2>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />
                <h4>{book.volumeInfo.description}</h4>
                <div className="comments">
                    <h3>Comments:</h3>
                        <ul>
                            <li>{comments.comment}</li>
                        </ul>
                    <Link to="books/add">
                        <button>Add Comment</button>
                    </Link>
                </div>
            </div>  
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {book ? loaded() : loading()}
        </div>
    )
}


export default Show