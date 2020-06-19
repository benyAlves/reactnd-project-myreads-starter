import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'


class SearchBook extends Component{


    render(){
        return (
            <div className="search-books">
          <div className="search-books-bar">
            <Link
                 to='/'>
                     <button
                    className='close-search'
                    onClick={this.props.onClearSearch}>
                        Close
                        </button>
                        </Link>

            <div className="search-books-input-wrapper">
              <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.props.query}
                onChange={(event) => this.props.searchBooks(event.target.value)}
              />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

            {
            
                this.props.seachedBooks.map(book => {
                            if(book.shelf === this.props.shelf){
                                return (<Book onMoveBook={this.props.onMoveBook} key={book.id} book={book}/>)
                            }
                        })
            }
            </ol>
          </div>
        </div>
        )
    }
}

export default SearchBook