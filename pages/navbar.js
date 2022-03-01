import styles from "../styles/Home.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function navBar()
{
  return (
    <Navbar className={styles.navbar} bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand className={styles.navbarBrand} href="#home">
            <img
              src="/car-icon.png"
              width="70"
              height="70"
              alt="Car Icon"
            ></img>
            carDapp
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ml-auto"
            styles="margin: 5px"
          />
          <Nav className="navItem">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/addCar">Add Car</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

