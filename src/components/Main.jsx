import React from 'react'
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Add from '../pages/Add';
import Edit from '../pages/Edit';
import Show from '../pages/Show';
import {Link} from 'react-router-dom';
import '../style.css'




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

        return bookData
    }

    const loaded = () => {
        return data.items.map((book) => (
            
            <div key={book.id} className="book card">
                <Link to={{
                    pathname: `books/${book.id}`,
                    state: {
                        book: book
                    }
                }}>
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.imageLinks.thumbnail}/>
                    <div className="card-body">
                    <h1 className="card-title">{book.volumeInfo.title}</h1>
                    <h3 className="card-text">{book.volumeInfo.authors}</h3>
                    <a href="#!" type="button" class="btn btn-danger">Button</a>
                    </div>
                    
                </Link>
            </div>
        ))
        
    }

    const loading = () => {
        return <h2 className="loading">Search a Book Title</h2>
    }
    
    return(
        <main className="main">


            <Switch>
                <Route exact path="/">

                    <form onSubmit={handleSubmit}>
                        <input type="text" value={form.name} name="title" placeholder="Search By Title" onChange={handleChange} />
                        <input type="submit" value="Find Book" class="btn btn-danger"/>
                    </form>
                    <div className="cards">
                    {data ? loaded() : loading()}
                    </div>
                    
                </Route>
                <Route path="/books/add" render={() => <Add />}/>
                <Route path="/books/:id" render={() => <Show />}/>
            </Switch>
        </main>
    ) 
}


export default Main;

