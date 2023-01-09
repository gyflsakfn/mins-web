import React, { useState } from 'react'
import { addComment } from '../../api/firebase';
import Button from '../../component/ui/Button';


const CommentForm = ({ user, comments }) => {
  const [commentInfo, setCommentInfo] = useState({});
  const [isSubmit, setIsSubmit] = useState(isTrue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentInfo((prev) => ({ ...prev, [name]: value }))
    console.log(value)
    // console.log(value)
  }

  const isAnonChange = (e) => {
    const { checked } = e.target;
    setCommentInfo((prev) => ({ ...prev, isAnon: checked }))
  }


  // TODO: isSubmit 상태 이름 변경!! 고민 중...
  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert('완료')
    console.log(commentInfo)
    addComment(commentInfo, user)
    // setIsSubmit(true);
  }

  function isTrue() {
    let result = comments?.filter((comment) => comment.id === user.uid);
    if (result.length === 0) return false;
    else return true
  }

  return (
    <>
      {
        isSubmit ? <p>작성해주셔서 감사합니다.</p> :
          <form onSubmit={handleSubmit} className="commentForm">
            <div className="input__wrapper">
              <input type="text" name="comment" placeholder="코멘트를 적으세요." onChange={handleChange} />
              <label htmlFor="checkAnon">익명</label>
              <input id='checkAnon' type="checkbox" name="isAnon" onChange={isAnonChange} />
            </div>
            <div className="btn__wrapper">
              <Button text='제출하기'></Button>
            </div>
          </form>
      }

    </>


  )
}

export default CommentForm