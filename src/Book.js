import React, { Component } from 'react'

class Book extends Component{

  options = ["currentlyReading", "wantToRead", "read", "none"]

    render(){

        const hasAuthors = this.props.book.authors;
        const hasImageLinks = this.props.book.imageLinks;

        let authors;
        let smallThumbnail = '';

        if (hasAuthors) {      
          authors = this.props.book.authors.map(author => (<small>&#8226; {author} </small>))
        }

        if(hasImageLinks){
          smallThumbnail = this.props.book.imageLinks.smallThumbnail
        }

        return (
            <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select 
                                onChange={(event) =>
                                        this.props.onMoveBook(
                                            this.props.book, event.target.value
                                        )}
                                        value={this.props.shelf}>

                              <option value="move" disabled>Move to...</option>
                              { this.options.map(option => (
                                 <option value={option} selected={this.props.book.shelf === option}>{option.replace(/([a-z0-9])([A-Z])/g, '$1 $2')}</option>
                              )) }
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{this.props.book.title}</div>
                        <div className="book-authors">
                            
                                {authors}
                            
                        </div>
                      </div>
                    </li>
        )
    }
}

export default Book