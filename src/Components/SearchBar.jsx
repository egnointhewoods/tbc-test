import '../Component Styles/SearchInput.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({search}){
    return(
        <div className="wrap">
                <div className="search">
                    <input type="text" onChange={search} className="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" className="searchButton">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>                
                    </button>
                </div>                              
        </div> 
    )
}