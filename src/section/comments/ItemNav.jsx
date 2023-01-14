import Button from '../../component/ui/Button';
import useComments from '../../hooks/useComments';

const ItemNav = ({ id }) => {

  const { removeComment } = useComments();

  const removeCommentHandler = () => {
    if (window.confirm('코멘트를 삭제하시겠습니까?')) {
      removeComment.mutate({ id }, {
        onSuccess: () => {
          window.alert('삭제되었습니다.')
        }
      })
    }
  }
  return (
    <div className='itemNav__buttono-wrapper'>
      <Button onClick={removeCommentHandler} type={'red'} size='sm' text={'삭제'} />
    </div>
  )
}

export default ItemNav