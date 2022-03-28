import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt , faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import useAuth from '../hooks/useAuth';

 

const signUp = <FontAwesomeIcon icon={faSignInAlt} />
const course = <FontAwesomeIcon icon={faGraduationCap} />

const Header = () => {
  const {user,logOut} = useAuth()
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand as={HashLink} to="/" className="fs-1 fw-bold"> <span id="logo-color">{course}</span> SheraCourse</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto fw-bold">
      <Nav.Link as={HashLink} to="/">Home</Nav.Link>
      <Nav.Link as= {HashLink} to="/#courses">Courses</Nav.Link>
      <Nav.Link as= {HashLink} to="/#freeCourses">Free Courses</Nav.Link>
 
      <Nav.Link as= {HashLink} to="/contact">Contact</Nav.Link>
     
    </Nav>

    {
      user.email? <Nav><button   onClick={logOut}  className="header-button">Sign out {signUp}</button></Nav> :
      <Nav className="fw-bold">
        <Nav.Link as={HashLink} to="/login" >Login</Nav.Link>
        <Nav.Link as={HashLink} to="/register" className="header-button">Sign up {signUp}</Nav.Link>
      </Nav>
    }
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;