import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  onSubmitForm = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClsName: initialContainerBackgroundClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachCom => {
        if (id === eachCom.id) {
          return {...eachCom, isLiked: !eachCom.isLiked}
        }
        return eachCom
      }),
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(comment => comment.id !== id),
    })
  }

  onChangeInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeTextarea = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentList} = this.state

    return (
      <div className="comment-app-container">
        <div className="app-container">
          <div className="first-cont">
            <h1 className="heading">Comments</h1>
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <p className="para">Say something about 4.0 technologies</p>
              <input
                className="input-field"
                placeholder="Your Name"
                onChange={this.onChangeInput}
                value={name}
                type="text"
              />
              <textarea
                type="text"
                className="text-area-input"
                placeholder="Your Comment"
                onChange={this.onChangeTextarea}
                value={comment}
              />
              <button className="button" type="submit">
                Add comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr className="line" />
        <div className="comment-card-cont">
          <p className="comment-count">
            <span className="count">{commentList.length}</span>
            Comments
          </p>
          <ul>
            {commentList.map(each => (
              <CommentItem
                eachCommentDetails={each}
                key={each.id}
                deleteComment={this.deleteComment}
                toggleIsLiked={this.toggleIsLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
