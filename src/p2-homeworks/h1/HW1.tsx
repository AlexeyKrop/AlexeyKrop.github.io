import React from 'react'
import AlternativeMessage from "./AlternativeMessage";
import Message from './Message';

const messageData = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Lebron James',
  message: 'Hello samurai',
  time: '22:00',
}

const HW1 = () => {

  return (
    <div>
      <hr/>
      homeworks 1


      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {!messageData.message && <AlternativeMessage/>}

      <hr/>
    </div>
  )
}


export default HW1
