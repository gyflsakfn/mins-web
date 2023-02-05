
import React, { useEffect, useState } from 'react'
import CommentWriteFalse from './CommentWriteFalse';
import CommentWriteTrue from './CommentWriteTrue';

const CommentForm = ({ user, logout, comments }) => {
  const [isWrite, setIsWrite] = useState();

  function checkIsWrite(commentList, loginUser) {
    let result = commentList?.filter((comment) => comment.id === loginUser.uid);
    if (result.length === 0) return setIsWrite(false);
    else return setIsWrite(true);
  }

  const handleLogout = () => {
    if (window.confirm('로그아웃하시면 코멘트를 보실 수 없습니다. 로그아웃하시겠습니까?')) return logout()
  }

  useEffect(() => {
    checkIsWrite(comments, user);
  }, [comments, user])

  return (
    <>
      {
        isWrite ? <CommentWriteTrue handleLogout={handleLogout} userName={user.displayName} />
          : <CommentWriteFalse handleLogout={handleLogout} user={user} />
      }
    </>
  )
}

export default CommentForm