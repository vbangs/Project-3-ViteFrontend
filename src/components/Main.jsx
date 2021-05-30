import React from 'react'
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Add from '../pages/Add';
import Edit from '../pages/Edit';
import Show from '../pages/Show';
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom"


function Main(props) {

    let history = useHistory();

    const [form, setForm] = useState('');
    const [data, setData] = useState(null);

    const URL=`https://www.googleapis.com/books/v1/volumes?q=${form.title}+intitle:${form.title}&key=AIzaSyC6j4bZ4ZvK4pkxk0lGiQw6Y16TLIsM6eY`
    
    const Heroku="https://notebooks3.herokuapp.com/books/"

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        //prevent default
        event.preventDefault()
        //Call API for searched term
        getBook()
    }

    const getBook = async () => {
        const response = await fetch(URL)
        const bookData = await response.json()

        setData(bookData)

        return bookData
    }

    const addComment = async (comment) => {
        await fetch(Heroku, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        history.push(`/`)
    }

    const editComment = async (comment, id) => {
        await fetch(Heroku + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        history.push(`/`)
    }

    const deleteComment = async (id) => {
        //make delete request to delete comment
        await fetch(Heroku + id, {
            method: "delete",
        })
        history.push('/')
    }

    const loaded = () => {
        return data.items.map((book) => (
            <div key={book.id} className="book">
                <Link to={{
                    pathname: `books/${book.id}`,
                    state: {
                        book: book
                    }
                }}>
                    <h1>{book.volumeInfo.title}</h1>
                    <h3>{book.volumeInfo.authors}</h3>
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.imageLinks.thumbnail}/>
                </Link>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Search a Book Title</h1>
    }
    
    return(
        <main>


            <Switch>
                <Route exact path="/">
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={form.name} name="title" placeholder="Search By Title" onChange={handleChange} />
                        <input type="submit" value="Find Book"/>
                    </form>
                    {data ? loaded() : loading()}
                </Route>
                <Route path="/add" render={(rp) => <Add addComment={addComment} {...rp}/>}/>
                <Route path="/books/:id" render={(rp) => <Show {...rp}/>}/>
                <Route path="/edit" render={(rp) => <Edit editComment={editComment} deleteComment={deleteComment} {...rp}/>}/>
            </Switch>
        </main>
    ) 
}


export default Main;