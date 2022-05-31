import BookList from './Components/BookList';
import FixedNavbar from './Components/FixedNavbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
    
    return (
      <Router>
        <div className="App container-lg">
        <FixedNavbar />
        <Routes>                    
            <Route path='*' element = {<BookList /> } />
        </Routes> 

        </div>

      </Router>
    );
  } 


export default App;
