import React from 'react'
import Card from '../../component/Card'

const CommetItem = ({ item, user }) => {
  const { id, displayName, comment, isAnon } = item;
  return (
    // TODO: 삭제, 수정 버튼?
    <Card className={(user?.uid === id ? `my` : '') + ' white comment__card'}>
      <h6 className=''>{isAnon ? '익명' : displayName}</h6>
      <div className="commentItem">
        <small>{comment}</small>
      </div>
    </Card>
  )
}

export default CommetItem