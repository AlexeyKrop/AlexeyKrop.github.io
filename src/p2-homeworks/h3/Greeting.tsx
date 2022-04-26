import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import Button from "./Common/Button";
import Input from "./Common/Input";


type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  error: string // need to fix any
  totalUsers: number // need to fix any
  onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}
// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {

  return (
    <div className={s.form}>
      <Input onKeyPressHandler={onKeyPressHandler} value={name} onChange={setNameCallback} error={error}/>
      <span className={s.errorText}>{error}</span>
      <Button name={'add'} callBack={addUser} />
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
