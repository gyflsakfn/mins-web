
import React, { useCallback, useRef, useState } from 'react'
import { addNewComment } from '../../api/firebase';
import Button from '../../component/ui/Button';
import User from '../../component/User';
import { useMutation, useQueryClient } from '@tanstack/react-query'

const CommentForm = ({ user, comments, isComment }) => {
  const [commentInfo, setCommentInfo] = useState({});
  const { isUserComment, setIsUserComment } = isComment;

  const textRef = useRef();
  // 추가

  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const queryClient = useQueryClient();

  const addComment = useMutation(({ commentInfo, user }) => addNewComment(commentInfo, user),
    {
      onSuccess: () => queryClient.invalidateQueries('projects'),
    });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setCommentInfo((prev) => ({ ...prev, [name]: value }))
    handleResizeHeight();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment.mutate({ commentInfo, user }, {
      onSuccess: () => {
        window.alert('코멘트가 성공적으로 추가되었습니다.')
        setCommentInfo({})
        setIsUserComment(true);
      }
    })
  }

  function isWrite() {
    let result = comments?.filter((comment) => comment.id === user.uid);
    if (result.length === 0) return false;
    else return true
  }

  return (
    <>
      {
        isWrite && isUserComment ? <p>{`${user.displayName}님 작성해주셔서 감사합니다.`}</p> :
          <form onSubmit={handleSubmit} className="commentForm">
            <div className="commentForm__user-wrapper">
              {user && <User user={user} />}
              <label htmlFor="checkAnon">익명</label>
              <input id='checkAnon' type="checkbox" name="isAnon" value={commentInfo.isAnon ?? false} onChange={handleChange} />
            </div>
            <textarea rows={1} ref={textRef} type="text" name="comment" value={commentInfo.comment ?? ''} placeholder="코멘트를 적으세요." onChange={handleChange} />
            <div className="submit__button-wrapper">
              <Button text='작성하기'></Button>
            </div>
          </form>
      }

    </>


  )
}

export default CommentForm