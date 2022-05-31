import '../Component Styles/BookDetails.css'
import { useEffect, useState } from 'react';
import LoadingScreen from '../Components/LoadingScreen'


export default function BookDetails(){  

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let bookId = params.get('bookdetails');
    let getBookDetailsAPI = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

    const [book, setBook] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')

    useEffect(()=> {
        fetch(getBookDetailsAPI)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                } 
                return res.json();
            })
            .then(data => {
                setBook(data.volumeInfo);
                console.log(book)
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })        
    }, [getBookDetailsAPI])


    if(isLoading){
        return(
            <LoadingScreen />
        )
    }
    if(book && !isLoading && !error){
        return(
            <div className='bookDetails row'>
                <img className='col-6 bookDetailImg' src={book?.imageLinks.thumbnail || book?.imageLinks.smallThumbnail} alt="Book thumbnail"></img>
                <div className='description col-6'>
                    <h3 className="title">{book?.title}</h3>  
                    <p>Author: {book?.authors[0]}</p>  
                    {book.pageCount && <p>Pages: {book.pageCount}</p>}
                    {book.categories && <p>Category: {book.categories[0]}</p>}
                    {book.bookDescription && <p>Description: {book.bookDescription}</p>}
                    {book.publisher && <p>Publisher: {book.publisher}</p>}     
                    {book.language && <p>Language: {book.language}</p>}                
                    {book.previewLink && <a href={book.previewLink} target='_blank'>Preview</a>}
                </div>     
            </div>
        )
    }
        
    
    
}