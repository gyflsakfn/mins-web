import './user.css'

const User = ({ user: { photoURL, displayName } }) => {
  return (
    <div className='user__box'>
      <img src={photoURL} alt={displayName} />
      <span>{displayName}</span>
    </div>

  )
}

export default User