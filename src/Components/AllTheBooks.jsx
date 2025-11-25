import { Container, Row, Col, Card, Button } from "react-bootstrap"
import books from "../Data/history.json"
import "../index.css"
import { useState, useEffect } from "react"

const AllTheBooks = () => {
  const [activeBook, setActiveBook] = useState(books[0])
  return (
    <>
      <h1
        className="btn d-flex justify-content-center fs-1 my-5"
        onClick={() => alert("hello")}
      >
        WELCOME
      </h1>
      <Container className="my-5">
        <Row className=" row-cols-2 row-cols-md-3 row-cols-lg-4 align-items-center">
          {books.map((book) => (
            <Col className="my-3 align-items-center">
              <Card
                id="card"
                key={book.asin}
                className="h-100 d-flex flex-column bg-dark-subtle"
              >
                <Card.Img
                  variant="top"
                  className="img-fluid"
                  src={book.img}
                  style={{ objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between h-100">
                  <Card.Title className="my-auto">{book.title}</Card.Title>
                  <Card.Text className="my-auto">{book.price}</Card.Text>
                  <Card.Text className="my-auto">{book.category}</Card.Text>
                  <Button className="my-auto bg-dark" variant="primary">
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
export default AllTheBooks
