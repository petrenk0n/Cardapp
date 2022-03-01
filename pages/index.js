import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Add Car</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <body id={styles.body}>
        <h1 className={styles.context}>
          <h1>Cardapp</h1>
        </h1>
        <Form>
          <Form.Group className={styles.searchBar}>
          <Form.Control
            type="search"
            placeholder="Enter VIN"
            aria-label="Search"
            className={styles.searchField}
          />
          <Button className={styles.searchButton} variant="primary" type="submit">
            Search
          </Button>
          </Form.Group>
          
        </Form>
      </body>
    </>
  );
}

function Search() {}
