import React, { useState } from 'react'

export function TwitterFollowCard({ formatName, userName, children }) {
  const [isFollowing, setIsFollowing] = useState(false)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleOnclick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="avatar"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-infoUserName">
            {formatName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleOnclick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
