import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

function MinBr() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home">MY BOUTIQUE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="ms-auto my-2 my-lg-0"
            navbarScroll>
          <NavDropdown title="Login" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="/reg">Sign Up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home">
               HOME
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MinBr;