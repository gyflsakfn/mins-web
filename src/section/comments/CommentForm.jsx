
import React, { useCallback, useRef, useState } from 'react'
import { addNewComment } from '../../api/firebase';
import Button from '../../component/ui/Button';
import User from '../../component/User';
import { useMutation, useQueryClient } from '@tanstack/react-query'

const CommentForm = ({ user, comments, isComment }) => {
  const [commentInfo, setCommentInfo] = useState({});
  const { setUserComment, isUserComment } = isComment;

  const textRef = useRef();

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
    const { name, value } = e.target;
    setCommentInfo((prev) => ({ ...prev, [name]: value }))
    handleResizeHeight();
  }

  const isAnonChange = (e) => {
    const { checked } = e.target;
    setCommentInfo((prev) => ({ ...prev, isAnon: checked }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment.mutate({ commentInfo, user }, {
      onSuccess: () => {
        window.alert('코멘트가 성공적으로 추가되었습니다.')
        setUserComment(true);
      }
    })
  }

<<<<<<< HEAD
  // function isWrite() {
  //   let result = comments?.filter((comment) => comment.id === user.uid);
  //   if (result.length === 0) return false;
  //   else return true
  // }
=======
  function isWrite() {
    let result = comments?.filter((comment) => comment.id === user.uid);
    if (result.length === 0) return false;
    else return true
  }
>>>>>>> 87b27fe9de6ffc91d920e2ed6d6b251d8055bb3e

  return (
    <>
      {
        isUserComment ? <p>{`${user.displayName}님 작성해주셔서 감사합니다.`}</p> :
          <form onSubmit={handleSubmit} className="commentForm">
            <div className="commentForm__user-wrapper">
              {user && <User user={user} />}
              <label htmlFor="checkAnon">익명</label>
              <input id='checkAnon' type="checkbox" name="isAnon" onChange={isAnonChange} />
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