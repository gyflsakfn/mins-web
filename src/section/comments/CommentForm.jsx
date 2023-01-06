import React, { useState } from 'react'
import { addComment } from '../../api/firebase';


const CommentForm = ({ user }) => {
  const [commentInfo, setCommentInfo] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setCommentInfo((prev) => ({ ...prev, [name]: value, isAnon: checked }))
  }

  const handleClick = () => {
    window.alert('완료')
    addComment(commentInfo, user)
  }

  return (
    <div className="input__wrapper">
      <input type="text" name="comment" placeholder="코멘트를 적으세요." onChange={handleChange} />
      <input type="checkbox" name="isAnon" onChange={handleChange} />
      <button onClick={handleClick}>제출제출</button>
    </div>
  )
}

export default CommentForm