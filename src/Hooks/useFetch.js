import { useEffect, useState } from "react";

export default function FetchBooks(bookListAPI) {    
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
    
  useEffect(()=> {
    setTimeout(() => {
      fetch(bookListAPI)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsLoading(false);
        data.items.map((book)=> {
          book.volumeInfo.price = Math.floor(Math.random() * 35) + 20;
        })
          
          
        setData(data);
        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      })
    }, 2000);
      
  }, [bookListAPI])

  return {data, isLoading, error}
}

