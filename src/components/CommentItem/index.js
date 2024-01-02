// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachCommentDetails, deleteComment, toggleIsLiked} = props
  const {id, name, comment, isLiked, date, initialClsName} = eachCommentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)
  const likeTextClsBtn = isLiked ? 'button2' : 'button2 active'

  const idLikeButton = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const onClickDelete = () => {
    deleteComment(id)
  }

  const onClickLikeButton = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="list-item">
      <div>
        <div className="cont">
          <p className={initialClsName}>{initial}</p>
          <p className="name">{name}</p>
          <p className="time">{postedTime} ago</p>
        </div>
        <p className="comment-text">{comment}</p>
        <div className="button-cont">
          <div className="cont">
            <img src={idLikeButton} alt="like" className="like-button" />
            <button
              type="button"
              className={likeTextClsBtn}
              onClick={onClickLikeButton}
            >
              Like
            </button>
          </div>
          <button
            type="button"
            className="button2"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
