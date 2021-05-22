import React from 'react'
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';



function Main(props) {

    const [form, setForm] = useState('');

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

        console.log(URL)
        console.log(bookData)
        //conditional to see if we need to create book in MongoDB
    }
    
    return(
        <main>


            <Switch>
                <Route exact path="/">
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={form.name} name="title" placeholder="Search By Title" onChange={handleChange} />
                        <input type="submit" value="Find Book"/>
                    </form>
                </Route>
                <Route path="/books/:id" render={() => <Show />}/>
            </Switch>
        </main>
    ) 
}


export default Main;