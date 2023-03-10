import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import logo from '../planet.png';
import '../App.css';

const MyNavbar = () => (
  <Navbar className="nav">
    <Container className="navbar">
      <Navbar.Brand style={{ display: 'flex', gap: '10px' }}>
        <img
          src={logo}
          width="50"
          height="50"
          alt="Space travelers hub logo"
        />
        <Link to="/" className="navbar-header">Space Travels&apos; Hub</Link>
      </Navbar.Brand>
      <Nav>
        <Nav.Link><Link to="/" className="navlink">Rockets</Link></Nav.Link>
        <Nav.Link><Link to="/missions" className="navlink" style={{ borderRight: '3px solid #dcdcdc', paddingRight: '5px' }}>Missions</Link></Nav.Link>
        <Nav.Link><Link to="/myprofile" className="navlink">My Profile</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>

);

export default MyNavbar;
