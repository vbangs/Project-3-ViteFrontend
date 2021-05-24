import {useState} from "react"

function Show(props) {
    const id = props.match.params.id
    // copied from people app
    const books = props.books
    const book = books.find((p) => {
        return p._id === id
    })

    // state for book
    const [editForm, setEditForm] = useState(book)

    // handleChange function for comments form
    const handleChange = (event) => {
        setEditForm({
            ...editForm,
            [events.target.names]: event.target.value
        })
    }

    // handleSubmit for book
    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateBooks(editForm, book._id)
        props.history.push("/show")
    }

    return (
        <div className="book">
            <h1>{book.title}</h1>
            <h2>{book.authors}</h2>
            <img src={book.image} alt={book.imageLinks.thumbnail} />
            <a href="/Details"><button id="details">
                Details
            </button></a>
        
        </div>
    )

}


export default Show