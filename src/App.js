import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBooks'
import BooksList from './BooksList'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    seachedBooks: [],
    query: ''
  }

  componentDidMount(){
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll()
     .then((books)=> {
        this.setState({
          books
        })
     })
  }



  searchBooks = (query) => {

    BooksAPI.search(query)
    .then((seachedBooks)=> {
       this.setState({
        seachedBooks
       })
       console.log(seachedBooks)
    })

    this.setState(() => ({
        query: query.trim()
    }))

    console.log(query)
}

updateQuery = (query) => {
  this.setState(() => ({
      query: query.trim(),
      seachedBooks: []
  }))
}

clearQuery = () => {
  this.updateQuery('')
}

  moveBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.getAllBooks()
    })
  }

  render() {

    const bookShelfs = [...new Set(this.state.books.map(book => book.shelf))]

    return (
      <div className="app">
          <Route path='/addBook' render={({history}) => (

            <SearchBook value = {this.state.query} 
                        seachedBooks = {this.state.seachedBooks} 
                        searchBooks={this.searchBooks} 
                        onMoveBook={this.moveBookToShelf} 
                        onClearSearch={this.clearQuery} 
                        shelf={this.props.shelf}/>

        )}/>
          
          <Route exact path='/' render={ () => (

            <BooksList 
                      bookShelfs={bookShelfs} 
                      onMoveBook={this.moveBookToShelf} 
                      books={this.state.books}/>
          
          )}/>
          
    
      </div>
    )
  }
}

export default BooksApp