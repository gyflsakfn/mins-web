import React from 'react'
import Button from '../../component/ui/Button'

const CommentWriteTrue = ({ handleLogout, userName }) => {
  return (
    <>
      <div className="commentForm__Info-wrapper">
        <p>{`${userName}님 작성해주셔서 감사합니다.`}</p>
        <Button onClick={handleLogout} color={'red'} size='sm' text={'로그아웃'} />
      </div>
    </>
  )
}

export default CommentWriteTrue