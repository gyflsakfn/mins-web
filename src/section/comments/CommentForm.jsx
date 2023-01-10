
import React, { useCallback, useRef, useState } from 'react'
import { addComment } from '../../api/firebase';
import Button from '../../component/ui/Button';
import User from '../../component/User';


const CommentForm = ({ user, comments }) => {
  const [commentInfo, setCommentInfo] = useState({});
  const [isUserComment, setUserComment] = useState(isWrite);

  const textRef = useRef();

  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setCommentInfo((prev) => ({ ...prev, [name]: value, isAnon: checked }))
    handleResizeHeight();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert('완료')
    // TODO: Submit 하면 바로 업데이트
    addComment(commentInfo, user)
    // setIsSubmit(true);
  }

  function isWrite() {
    let result = comments?.filter((comment) => comment.id === user.uid);
    if (result.length === 0) return false;
    else return true
  }

  return (
    <>
      {
        isUserComment ? <p>{`${user.displayName}님 작성해주셔서 감사합니다.`}</p> :
          <form onSubmit={handleSubmit} className="commentForm">
            <div className="commentForm__user-wrapper">
              {user && <User user={user} />}
              <label htmlFor="checkAnon">익명</label>
              <input id='checkAnon' type="checkbox" name="isAnon" onChange={handleChange} />
            </div>
            <textarea rows={1} ref={textRef} type="text" name="comment" placeholder="코멘트를 적으세요." onChange={handleChange} />
            <div className="submit__button-wrapper">
              <Button text='작성하기'></Button>
            </div>
          </form>
      }

    </>


  )
}

export default CommentForm