import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbarlocal() {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand className="navbar-brand fw-bold fs-4" href="#">
              Collection
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Side Bar
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/">
                    <Nav.Link href="#action1">Home</Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link href="#action2">Products</Nav.Link>
                  </Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">About</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Contact</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
                <div className="buttons">
                  <Link to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"></i>Login
                  </Link>
                  <a href="" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-1"></i>Register
                  </a>
                  <Link to="/cart" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i>Cart (
                    {state.length})
                  </Link>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarlocal;
