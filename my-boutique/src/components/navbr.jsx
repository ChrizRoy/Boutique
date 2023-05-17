import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

function Navbr() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home">MY BOUTIQUE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            >
            <Nav.Link href="#action2">MEN</Nav.Link>
            <Nav.Link href="#action2">WOMEN</Nav.Link>
            <Nav.Link href="#action2">KIDS</Nav.Link>            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
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

export default Navbr;