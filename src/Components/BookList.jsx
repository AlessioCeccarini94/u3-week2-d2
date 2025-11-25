import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useState } from "react"
import books from "../Data/fantasy.json"

const BookList = (props) => {
  const [state, setState] = useState({
    search: "",
    selected: false,
    bookSelected: null,
    commentArea: false,
    asin: props.asin,
  })

  const changeState = (asin) => {
    setState({
      ...state,
      commentArea: !state.commentArea,
      selected: !state.selected,
      bookSelected: asin,
      elementId: asin,
    })
  }
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(state.search.toLowerCase())
  )
  return (
    <>
      <Form inline>
        <Row className="align-items-center justify-content-center my-3">
          <Col className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Search"
              value={state.search}
              onChange={(e) => setState({ ...state, search: e.target.value })}
              className=" me-sm-2 w-50"
            />
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      <Container className="ms-auto w-100">
        <Row className="w-100">
          <Col className="col-9 d-flex flex-wrap justify-content-around">
            {filteredBooks.map((book) => (
              <SingleBook
                changeState={changeState}
                key={book.asin}
                img={book.img}
                title={book.title}
                price={book.price}
                asin={book.asin}
                selected={state.bookSelected === book.asin}
              />
            ))}
          </Col>
          <Col className="col-3 bg-light bg-dark">
            <CommentArea asin={state.bookSelected} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BookList
