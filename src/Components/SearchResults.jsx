import '../Component Styles/SearchInput.css'
import '../Component Styles/BookList.css'
import SearchBar from '../Components/SearchBar'
import BookDetails from '../Components/BookDetails'
import { useState } from 'react';

import { Route, Routes } from "react-router-dom";


export default function SearchField({books, getDetails}){
    const [query, setQuery] = useState("");   

    
    const filteredBooks = books?.filter((book) => {
       
        if(query.length >= 3){
            return(
                book.volumeInfo.title.toLowerCase().includes(query.toLowerCase())
            )
        };
    })

    function search(e){
        setQuery(e.target.value)
    }

    
    return( 
        
            <>        
            <SearchBar search = {search}/> 
                        

            {/* Returns the search results */}                    
            {query.length >= 3 &&
                <div className='searchBookListWrapper'>
                        <div className='searchBookList row'>
                                {filteredBooks?.map((book) => (
                                    <div key={book.id} className='bookCard queriedBookCard col-3' onClick={() => { getDetails(book); setQuery('');}} > 
                                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Thumbnail of a book" />
                                        <div className='bookDescription'>
                                            <p className='title'>{book.volumeInfo.title}</p>
                                            <p className='author'>{book.volumeInfo.authors[0]}</p>
                                            <p className='price'>{book.volumeInfo.price} GEL</p>
                                        </div>
                                    </div>
                                ))}
                        </div> 
                </div>  
            } 
            <Routes>
                <Route path='/details' element = {<BookDetails /> } />
            </Routes>             
        </>   
            
          
    )
        
                
    
    
}