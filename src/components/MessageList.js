import React from 'react'
import Message from './Message'
import { connect } from 'react-redux'

function MessageList({ messages }){

  return (
  <div className="messageContainer">
  <div className="dragRegion"/>
    {messages.map(function(message){
      if(message.id === undefined){
        return <div/>;
      } else {
          return <Message key={message.id} {...message}/>
      }
    })}
  </div>
  )
}

const mapStateToProps = state => ({
  messages: state.messages
})

export default connect(
  mapStateToProps
)(MessageList)