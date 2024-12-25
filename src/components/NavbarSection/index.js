import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const NavbarSection = () => {
  return (
    <Navbar expand="lg" className="navbar-color navbar-section">
      <Container fluid className='navbar-cont'>
        <Navbar.Brand  className="fs-4  "><a className='logo-color' href="#ABOUT">DHANRAJ</a></Navbar.Brand>
        <Navbar.Toggle aria-control
        
        s="navbarScroll" className='bg-light' />
        <Navbar.Collapse id="navbarScroll" className='hamburger'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
        </Nav>
          <Nav className="ms-auto">
            <Nav className="me-5  fs-5"><a className='nav-link' href="#ABOUT">About</a></Nav>
            <Nav  className="me-5  fs-5"><a className='nav-link' href="#SKILLS">Skills</a></Nav>
            <Nav  className="me-5 fs-5"><a className='nav-link' href="#PROJECTS">Projects</a></Nav>
            <Nav  className=" fs-5"><a className='nav-link' href="#CONTACT">Contact</a></Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection