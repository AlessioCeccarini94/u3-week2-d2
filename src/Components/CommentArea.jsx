import { useState, useEffect } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"

const CommentArea = (props) => {
  const [comments, setComments] = useState([])

  const getComments = () => {
    console.log(props.asin)
    const URL =
      "https://striveschool-api.herokuapp.com/api/comments/" + props.asin
    const TOKEN =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMTI3NjIzZTc0MDAwMTVmN2ZkYzkiLCJpYXQiOjE3NjM2NDQwMjIsImV4cCI6MTc2NDg1MzYyMn0.X1G8ThgJJIBaS2lJwkbUtQCEyx2KKJ-chGO7mA6BnzY"
    fetch(URL, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error()
        }
      })
      .then((arrayOfComments) => {
        setComments(arrayOfComments)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const deleteComment = (id) => {
    const URL = "https://striveschool-api.herokuapp.com/api/comments/" + id
    const TOKEN =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMTI3NjIzZTc0MDAwMTVmN2ZkYzkiLCJpYXQiOjE3NjM2NDQwMjIsImV4cCI6MTc2NDg1MzYyMn0.X1G8ThgJJIBaS2lJwkbUtQCEyx2KKJ-chGO7mA6BnzY"
    fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => {
        if (res.ok) {
          getComments()
        } else {
          throw new Error()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    if (props.asin !== null) {
      getComments()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin])

  return (
    <>
      <div className="d-flex flex-column align-items-center my-3 position-sticky top-0">
        <CommentList comments={comments} deleteComment={deleteComment} />
        <AddComment asin={props.asin} addComments={getComments} />
      </div>
    </>
  )
}

export default CommentArea
