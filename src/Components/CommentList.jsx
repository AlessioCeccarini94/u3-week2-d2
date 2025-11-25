import { Dropdown } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentList = ({ comments, deleteComment }) => {
  return (
    <Dropdown className="text-center mb-2">
      <Dropdown.Toggle className="bg-dark border-success" id="dropdown-basic">
        Vedi i Commenti
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {comments.map((comment) => (
          <SingleComment
            key={comment._id}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default CommentList
