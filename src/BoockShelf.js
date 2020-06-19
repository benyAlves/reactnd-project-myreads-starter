import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component{
        
        render(){
            return (
                <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      {this.props.books.map(book => {
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


export default BookShelf