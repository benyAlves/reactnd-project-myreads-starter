import React, { Component } from 'react'
import BookShelf from './BoockShelf'
import {Link} from 'react-router-dom'


class BookList extends Component{

    render(){
        return(

            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    {
                     this.props.bookShelfs.map(bookShelf=>(
                        <BookShelf key={bookShelf} onMoveBook={this.props.onMoveBook} shelf={bookShelf} title={bookShelf.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toUpperCase()} books={this.props.books} />
                    ))
                    }
                </div>
                </div>
                <div className="open-search">
                <Link
                            to='/addBook'
                            className='button-add'
                        ><button>Add Book</button></Link>
                </div>
          </div>
        )
    }
}

export default BookList