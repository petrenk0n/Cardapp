import Head from "next/head";
import Navbar from "./navbar";
import styles from "../styles/addCar.module.css";
import { Form, Button, Card } from "react-bootstrap";
export default function addCar() {
  return (
    <>
      <Head>
        <title>Cardapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body id={styles.body}>
        <Navbar></Navbar>
        <Card class={styles.card}>
          <Card.Body>
            <Card.Title>Add a New Car</Card.Title>
            <Form>
              <Form.Group className="mx-auto" controlID="formModelName">
                <Form.Label>Model Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Model Name"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlID="formModelName">
                <Form.Label>VIN</Form.Label>
                <Form.Control type="text" placeholder="VIN"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlID="formModelName">
                <Form.Label>Mileage</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Mileage"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlID="formModelName">
                <Form.Label>Number of Previous Owners</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Number of Previous Owners"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlID="formModelName">
                <Form.Label>Number of Service Visits</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Number of Service Visits"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlID="formModelName">
                <Form.Label>Number of Accidents</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Number of Accidents"
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Car
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </body>
    </>
  );
}

/* 
Model Name
VIN
Mileage
Number of Previous Owners
Number of Service Visits
Number of Accidents

*/
