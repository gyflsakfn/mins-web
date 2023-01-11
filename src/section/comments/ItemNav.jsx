import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeComments } from '../../api/firebase';
import Button from '../../component/ui/Button';

const ItemNav = ({ id }) => {
  const queryClient = useQueryClient();
  const removeProject = useMutation(({ id }) => removeComments(id),
    {
      onSuccess: () => queryClient.invalidateQueries('comments'),
    });

  const removeCommentHandler = () => {
    removeProject.mutate({ id }, {
      onSuccess: () => {
        window.alert('삭제되었습니다.')
      }
    })
  }
  return (
    <div className='itemNav__buttono-wrapper'>
      <Button onClick={removeCommentHandler} type={'red'} size='sm' text={'삭제'} />
    </div>
  )
}

export default ItemNav