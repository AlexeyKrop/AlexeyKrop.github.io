import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)
  const zeroFormat = (x: number) => {
    let y: string = ''
    if (x < 10) {
      y = "0" + x;
      return y
    }
    return x;
  };
  const stop = () => {
    clearInterval(timerId)
  }
  const start = () => {
    stop()
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000)
    setTimerId(id)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }
  const stringTime = zeroFormat(date.getHours()) + ':' +  zeroFormat(date.getMinutes()) + ':' + zeroFormat(date.getSeconds())// fix with date
  const stringDate = zeroFormat(date.getDate()) + ':' + zeroFormat(date.getMonth()) + ':' + zeroFormat(date.getFullYear()) // fix with date

  return (
    <div>
      {show && (
        <div>
          {stringDate}
        </div>
      )}
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div>


      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>

    </div>
  )
}

export default Clock
