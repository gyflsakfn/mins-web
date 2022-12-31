import React from 'react'

const User = ({ user: { photoURL, displayName } }) => {
  return (
    <div>
      <img src={photoURL} alt={displayName} />
      <span>{displayName}</span>

    </div>

  )
}

export default User