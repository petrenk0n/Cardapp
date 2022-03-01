import Head from "next/head";
import Navbar from "./navbar";
import styles from "../styles/Home.module.css";
import { Form, Button } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <Head>
        <title>Cardapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
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

