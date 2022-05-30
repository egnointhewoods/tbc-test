import { Navbar, Nav, Container} from 'react-bootstrap';
import '../Component Styles/Navbar.css'
import { faHouse, faDollar, faPhone, faArrowTrendUp, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function FixedNavbar() {
    return (
        <Navbar className='Navbar' expand="lg">
        <Container>
          <Navbar.Brand href="/">Lorem Book Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="me-auto" id="navbarText">
                <Nav.Link className='navLink' to="/"> <FontAwesomeIcon icon={faHouse}/> Home</Nav.Link>
                <Nav.Link className='navLink' to="/"> <FontAwesomeIcon icon={faDollar}/> Sales</Nav.Link>
                <Nav.Link className='navLink' to="/"> <FontAwesomeIcon icon={faArrowTrendUp}/> Trending</Nav.Link>
                <Nav.Link className='navLink' to="/"> <FontAwesomeIcon icon={faPhone}/> Contact</Nav.Link>
            </Nav>  
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    )
}


