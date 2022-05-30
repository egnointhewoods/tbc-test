import useFetch from '../Hooks/useFetch'
import React from 'react';
import SearchField from './SearchField'
import '../Component Styles/BookList.css'

export default function BookList(){

  const { error, isLoading, data: books } = useFetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:Freud&key=AIzaSyAyESPX-QKsLHTJfvNzb-KXIwqOtRX4Cb8')
  

  if(isLoading){
    return(
      <>
        <SearchField />
        <h2>Loading...</h2>
      </>
    )
  } else
  if(!isLoading && !error){
    return (             
        <>
          <SearchField books = {books.items}/> 
          <div className='bookList row'>
          {books.items.map((book)=> {

              return(
              <div key={book.id} className='bookCard col-2'> 
                  <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Thumbnail of a book" />
                  <div className='bookDescription'>
                  <p className='title'>{book.volumeInfo.title}</p>
                  <p className='author'>{book.volumeInfo.authors[0]}</p>
                  <p className='price'>{book.volumeInfo.price} GEL</p>
                  </div>
              </div>
              )
          })}
          </div>
        
      </>
    );
  } else
  if(error){
    return(
      <h4>Failed to fetch the data</h4>
    )  
  }
}