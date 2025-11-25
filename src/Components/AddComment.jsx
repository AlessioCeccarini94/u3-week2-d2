import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"

const AddComment = (props) => {
  const [review, setReview] = useState({
    comment: "",
    rate: "1",
    elementId: props.asin,
  })

  const SendComment = (e) => {
    e.preventDefault()
    console.log(review)

    const TOKEN =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMTI3NjIzZTc0MDAwMTVmN2ZkYzkiLCJpYXQiOjE3NjM2NDQwMjIsImV4cCI6MTc2NDg1MzYyMn0.X1G8ThgJJIBaS2lJwkbUtQCEyx2KKJ-chGO7mA6BnzY"
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.status)
        }
      })
      .then(() => {
        alert("commento inviato con successo")
        setReview({
          comment: "",
          rate: "1",
          elementId: props.asin,
        })
      })
      .catch((err) => {
        console.log(err + "errore nell'invio del commento")
      })
  }
  useEffect(() => {
    if (review.elementId !== props.asin) {
      setReview((prevReview) => ({
        ...prevReview,
        elementId: props.asin,
      }))
    }
  }, [props.asin, review.elementId])
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <Form
          onSubmit={SendComment}
          className="d-flex flex-column align-items-center"
        >
          <Form.Group className="mb-3">
            <Form.Control
              className="bg-dark border-success text-white"
              value={review.comment}
              onChange={(e) =>
                setReview({ ...review, comment: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            s
            <Form.Select
              className="bg-dark border-success text-white"
              value={review.rate}
              onChange={(e) => setReview({ ...review, rate: e.target.value })}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" className="bg-dark border-success">
            Invia un commento
          </Button>
        </Form>
      </div>
    </>
  )
}

export default AddComment
