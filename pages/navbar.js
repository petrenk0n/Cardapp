import styles from "../styles/Home.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import carIcon from "../public/car-icon.png";
export default function navBar() {
  return (
    <Navbar className={styles.navbar} bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand style={{flexDirection:'row', marginRight: 5}} className={styles.navbarBrand} href="#home">
          {/* <Image src={carIcon} width="50" height="50" alt="Car Icon"></Image> */}
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
  );
}
