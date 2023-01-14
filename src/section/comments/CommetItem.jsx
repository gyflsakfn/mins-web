import React from 'react'
import Card from '../../component/Card'
import ItemNav from './ItemNav';

const CommetItem = ({ item, user }) => {
  const { id, displayName, comment, isAnon } = item;

  return (
    // TODO: Card로 하지말기
    <Card className={(user?.uid === id ? `my` : '') + ' white comment__card'}>
      <div className="comment__card-box">
        <h5 className=''>{isAnon ? '익명' : displayName}</h5>
      </div>
      <div className="comment__card-text">
        <small>{comment}</small>
      </div>
      {
        user?.uid === id || user?.isAdmin ? <ItemNav id={id} /> : null
      }
    </Card>
  )
}

export default CommetItem