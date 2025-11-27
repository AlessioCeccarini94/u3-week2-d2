import { Col, Card, Button } from "react-bootstrap"
import "../index.css"

const SingleBook = (props) => {
  const bookSelected = () => {
    props.changeState(props.asin)
  }

  return (
    <Col xs={10} md={5} className="mb-3 mt-3" data-testid="book-card">
      <Card
        data-testid="card"
        className="h-100 "
        style={{
          border: props.selected ? "3px solid red" : "none",
          cursor: "pointer",
        }}
      >
        <Card.Img variant="top" src={props.img} onClick={bookSelected} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{props.title}</Card.Title>
          <Card.Title>{props.price}</Card.Title>
          <Button className=" bg-dark" variant="primary">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
