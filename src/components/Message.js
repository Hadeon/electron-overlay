import React from 'react'

function Message({ target, text }){

  return (
    <div className="message" >
      <span className="messageSender">{`${target}: `}</span>
      <span>{text}</span>
    </div>
  )
}

export default Message