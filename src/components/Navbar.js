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
        <Link to="/" className="navlink">Rockets</Link>
        <Link to="/missions" className="navlink">Missions</Link>
        <Link to="/myprofile" className="navlink">My Profile</Link>
      </Nav>
    </Container>
  </Navbar>

);

export default MyNavbar;
