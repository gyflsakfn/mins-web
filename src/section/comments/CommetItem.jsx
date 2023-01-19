import Card from '../../component/Card'
import ItemNav from './ItemNav';

const CommetItem = ({ item, user, setSwiperParams }) => {
  const { id, displayName, comment, isAnon } = item;


  return (
    // TODO: Card로 하지말기
    <Card className={(user?.uid === id ? `my` : '') + ' white comment__card cardhover'}>
      <div className="comment__card-box">
        <h5 className=''>{isAnon ? '익명' : displayName}</h5>
      </div>
      <div className="comment__card-text">
        {comment.split("\n").map((line) => { // 줄바꿈이 있으면 끊어서 아래의 형태로 출력
          return (
            <small>
              {line}
              <br />
            </small>
          );
        })}

      </div>
      {
        user?.uid === id || user?.isAdmin ? <ItemNav id={id} /> : null
      }
    </Card>
  )
}

export default CommetItem