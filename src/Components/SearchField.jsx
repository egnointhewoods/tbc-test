import '../Component Styles/SearchInput.css'
import '../Component Styles/BookList.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchField({books}){

    const [query, setQuery] = useState("");

    
    const filteredData = books?.filter((book) => {
        //if no input the return the original        
        //return the item which contains the user input
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
            <div className="wrap">
            <div className="search">
                <input type="text" onChange={search} className="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" className="searchButton">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>                
                </button>
            </div>                              
            </div>           
            
            {query.length >= 3 &&
                <div className='searchBookListWrapper'>
                    <div className='searchBookList row'>
                            {filteredData?.map((book) => (
                                <div key={book.id} className='bookCard col-3'> 
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

        </>     
        )        
    
    
}