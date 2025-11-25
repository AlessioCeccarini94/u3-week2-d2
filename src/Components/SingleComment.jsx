import { Dropdown, Button } from "react-bootstrap"

const SingleComment = function ({ comment, deleteComment }) {
  return (
    <Dropdown.Item
      key={comment._id}
      className="d-flex justify-content-between align-items-center"
    >
      {comment.comment}
      <Button
        className="bg-danger border-dark ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </Dropdown.Item>
  )
}

export default SingleComment
