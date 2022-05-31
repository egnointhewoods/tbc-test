import '../Component Styles/SearchInput.css'
import '../Component Styles/BookList.css'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import BookDetails from './BookDetails'

import { Route, Routes } from "react-router-dom";


export default function SearchField({books}){
    
    
    let navigate = useNavigate(); 


    const [query, setQuery] = useState("");
    const [details, setDetails] = useState(false);
    useEffect(()=> {
        setQuery('');
    },[navigate])

    function getDetails(book){
        //Redirects the page to /details
        setDetails(book)
        navigate(`/details?bookdetails=${book.id}`);
    }
    
    const filteredBooks = books?.filter((book) => {
       
        if(query.length >= 3){
            return(
                book.volumeInfo.title.toLowerCase().includes(query.toLowerCase())
            )
        };
    })

    function search(e){
        setQuery(e.target.value)
        console.log(e.target.value.length)
    }  

        
     
        return(     
            <>        
                <SearchBar search = {search}/> 
                            
    
                {/* Returns the search results */}                    
                {query.length >= 3 &&
                    <div className='searchBookListWrapper'>
                            <div className='searchBookList row'>
                                    {filteredBooks?.map((book) => (
                                        <div key={book.id} className='bookCard col-3' onClick={()=>getDetails(book)} > 
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