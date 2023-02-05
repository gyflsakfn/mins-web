import Card from '../../component/ui/Card'
import CommentItemNav from './CommentItemNav';

const CommetItem = ({ item, user }) => {
  const { id, displayName, comment, isAnon } = item;

  return (
    <Card className={(user?.uid === id ? `my` : '') + ' white comment__card cardhover'}>
      <div className="comment__card-box">
        <h5 className=''>{isAnon ? '익명' : displayName}</h5>
      </div>
      <div className="comment__card-text">
        {comment.split("\n").map((line, index) => { // 줄바꿈이 있으면 끊어서 아래의 형태로 출력
          return (
            <small key={index}>
              {line}
              <br />
            </small>
          );
        })}

      </div>
      {
        user?.uid === id || user?.isAdmin ? <CommentItemNav id={id} /> : null
      }
    </Card>
  )
}

export default CommetItem