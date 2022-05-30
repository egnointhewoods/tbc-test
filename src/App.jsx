import BookList from './Components/BookList';
import FixedNavbar from './Components/FixedNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
    
    return (
      <div className="App container-lg">
        <FixedNavbar />
        <BookList />  
      </div>
    );
  } 


export default App;
