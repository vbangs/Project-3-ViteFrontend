import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css'

function Header(props) {

    return(
        <header className="header">
        <a href="/"><h1>Note-Books</h1></a>
        <h2>An app that helps you learn better!</h2>
        </header>
    )
}

export default Header