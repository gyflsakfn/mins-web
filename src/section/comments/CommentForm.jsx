
import React, { useCallback, useRef, useState } from 'react'
import { addNewComment } from '../../api/firebase';
import Button from '../../component/ui/Button';
import User from '../../component/User';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useQuery } from "@tanstack/react-query";
import { getComments } from '../../api/firebase';

const CommentForm = ({ user, logout }) => {
  const [commentInfo, setCommentInfo] = useState({});
  const queryClient = useQueryClient();
  const { data: comments } = useQuery(['comments'], getComments);

  const textRef = useRef();

  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);


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
      }
    })
  }


  const isWriteFn = useCallback(() => {
    let result = comments?.filter((comment) => comment.id === user.uid);
    if (result.length === 0) return false;
    else return true
  }, [comments, user])

  let isWrite = isWriteFn();

  return (
    <>
      {
        isWrite ?
          <div className="commentForm__Info-wrapper">
            <p>{`${user.displayName}님 작성해주셔서 감사합니다.`}</p>
            <Button onClick={logout} size='sm' text={'로그아웃'} />
          </div>
          :
          <form onSubmit={handleSubmit} className="commentForm">
            <div className="commentForm__user-wrapper">
              {user && <User user={user} />}
              <div className="commentForm__checkbox-wrapper">
                <label htmlFor="checkAnon">익명</label>
                <input id='checkAnon' type="checkbox" name="isAnon" value={commentInfo.isAnon ?? false} onChange={handleChange} />
              </div>
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