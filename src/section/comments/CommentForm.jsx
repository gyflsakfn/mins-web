import React, { useState } from 'react'
import { addComment } from '../../api/firebase';
import Button from '../../component/ui/Button';


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
    <div className="commentForm">
      <div className="input__wrapper">
        <input type="text" name="comment" placeholder="코멘트를 적으세요." onChange={handleChange} />
        <label htmlFor="checkAnon">익명</label>
        <input id='checkAnon' type="checkbox" name="isAnon" onChange={handleChange} />
      </div>
      <div className="btn__wrapper">
        <Button onClick={handleClick} text='제출하기'></Button>
      </div>
    </div>
  )
}

export default CommentForm