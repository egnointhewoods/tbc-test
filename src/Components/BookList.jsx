import useFetch from '../Hooks/useFetch'
import React from 'react';
import SearchField from './SearchResults'
import '../Component Styles/BookList.css'
import { useNavigate } from 'react-router-dom';
export default function BookList(){

  const { error, isLoading, data: books } = useFetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:Freud')

  let navigate = useNavigate(); 

  function getDetails(book){
    //Redirects the page
    navigate(`/details?bookdetails=${book.id}`);

}

  if(isLoading){
    return(
      <>
        <SearchField />
        <h2>Loading...</h2>
      </>
    )
  }
  
  if(error){
    console.log(error)
    return(
      <h2 style={{marginTop: "100px", color: "red"}}>{error}</h2>
    )
    
  }

  else

  if(!isLoading && !error){
    return (             
        <>
          <SearchField books = {books.items} getDetails = {getDetails}/> 
          <div className='bookList row'>
          {books.items.map((book)=> {

              return(
              <div key={book.id} className='bookCard col-2' onClick={() => getDetails(book)}> 
                  <img src={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail} alt="Thumbnail of a book" />
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