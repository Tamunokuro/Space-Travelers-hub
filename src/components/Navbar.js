import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import logo from '../planet.png';
import '../App.css';

const MyNavbar = () => (
  <Navbar className="nav">
    <Container className="navbar">
      <Navbar.Brand>
        <img
          src={logo}
          width="50"
          height="50"
          alt="Space travelers hub logo"
        />
        <Link to="/" className="navbar-header">Space Travels Hub</Link>
      </Navbar.Brand>
      <Nav.Link>
        <Link to="/" className="navlink">Rockets</Link>
        <Link to="/missions" className="navlink">Missions</Link>
        <Link to="/myprofile" className="navlink">My Profile</Link>
      </Nav.Link>
    </Container>
  </Navbar>

);

export default MyNavbar;
