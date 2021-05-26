import React from 'react'
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';
import {Link} from 'react-router-dom';



function Main(props) {

    const [form, setForm] = useState('');
    const [data, setData] = useState(null);

    const URL=`https://www.googleapis.com/books/v1/volumes?q=${form.title}+intitle:${form.title}&key=AIzaSyC6j4bZ4ZvK4pkxk0lGiQw6Y16TLIsM6eY`
    

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
        console.log(URL)
        console.log(bookData)

        return bookData
        //conditional to see if we need to create book in MongoDB
    }

    const loaded = () => {
        return data.items.map((book) => (
            <div key={book.id} className="book">
                <Link to={`/books/${book.id}`}>
                    <h1>{book.volumeInfo.title}</h1>
                    <h3>{book.volumeInfo.authors[0]}</h3>
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.imageLinks.thumbnail}/>
                </Link>
            </div>
        ))
    }

    const book = ""

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
                <Route path="/books/:id" render={() => <Show title={book.volumeInfo.title}/>}/>
            </Switch>
        </main>
    ) 
}


export default Main;