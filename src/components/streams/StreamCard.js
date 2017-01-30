import React from 'react'

export default ({
  children,
  className = '',
  stream,
  user
}) => (
  <div className={`stream-card ${className}`}>
    <div className='thumbnail-wrapper'>
      <img className='thumbnail' src={stream.image} />
    </div>
    <div className='information-wrapper'>
      <div className='title'>{stream.title}</div>
      <div className='description'>{stream.description}</div>
      <div className='author'>{user.name}</div>
    </div>
  </div>
)
