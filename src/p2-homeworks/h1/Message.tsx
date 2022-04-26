import React from 'react'
import classes from './Message.module.css'
type MessageTypeProps = {
  avatar: string
  name: string
  message: string
  time: string
}
const Message = (props: MessageTypeProps) => {
  return (
    <div className={classes.chat}>
      <div className={classes.chatAvatar}>
        <img src={props.avatar} width='50' alt="img"/>
        <p className={classes.name}>{props.name}</p>
      </div>
      <div className={classes.chatBody}>
        <div className={classes.chatMessage}>
          <p className={classes.message}>{props.message}</p>
          <span>{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export default Message
