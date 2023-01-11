import React from 'react'
import Card from '../../component/Card'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeComments } from '../../api/firebase';


const CommetItem = ({ item, user, setIsUserComment }) => {
  const { id, displayName, comment, isAnon } = item;

  const queryClient = useQueryClient();
  const removeProject = useMutation(({ id }) => removeComments(id),
    {
      onSuccess: () => queryClient.invalidateQueries('comments'),
    });

  const removeCommentHandler = () => {
    removeProject.mutate({ id }, {
      onSuccess: () => {
        setIsUserComment(false)
        window.alert('삭제되었습니다.')
      }
    })
  }
  return (
    // TODO: 삭제, 수정 버튼?
    <Card className={(user?.uid === id ? `my` : '') + ' white comment__card'}>
      <div className="comment__card-box">
        <h5 className=''>{isAnon ? '익명' : displayName}</h5>
        {
          user?.uid === id ? <button onClick={removeCommentHandler}>삭제</button> : null
        }
      </div>

      <div className="comment__card-text">
        <small>{comment}</small>
      </div>
    </Card>
  )
}

export default CommetItem