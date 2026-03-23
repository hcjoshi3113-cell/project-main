
import { useContext } from "react";
import { Navbar, Button, Container, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../context/Context";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";


function NavScrollExample() {


  const { user } = useContext(authContext)

  const navigate = useNavigate()


  const handleLogin = () => {
    navigate("/auth")

  }

  const handleLogout = async () => {
    await signOut(auth)

  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Journey Joy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="trips" >Trips</Nav.Link>

            {user ? <Nav.Link as={NavLink} to="" >My Bookings</Nav.Link> : null}

            <Nav.Link as={NavLink} to="about" >About</Nav.Link>

            {
              user ? <Button variant="outline-dark
              " onClick={handleLogout}  >logout</Button> : <Button variant="outline-secondary" onClick={handleLogin} >Log in</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
