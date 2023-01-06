import React from 'react'
import Card from '../../component/Card'

const CommetItem = ({ item }) => {
  const { displayName, comment, isAnon } = item;
  return (
    <Card className='white comment__card'>
      <h6 className=''>{isAnon ? '익명' : displayName}</h6>
      <div className="commentItem">
        <small>{comment}</small>
      </div>
    </Card>
  )
}

export default CommetItem