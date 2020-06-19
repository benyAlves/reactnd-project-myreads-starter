import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'


class SearchBook extends Component{


    render(){

        const { seachedBooks, query, searchBooks, onClearSearch } = this.props;

        return (
            <div className="search-books">
          <div className="search-books-bar">
            <Link
                 to='/'>
                     <button
                    className='close-search'
                    onClick={onClearSearch}>
                        Close
                        </button>
                        </Link>

            <div className="search-books-input-wrapper">
              <input 
                type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => searchBooks(event.target.value)}
              />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

            {
                seachedBooks && seachedBooks.length > 0 && this.props.seachedBooks.map(book => {
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