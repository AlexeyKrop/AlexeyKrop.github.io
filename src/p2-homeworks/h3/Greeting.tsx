import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import Button from "./Common/Button";
import Input from "./Common/Input";
import {UserType} from "./HW3";


type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  error: string // need to fix any
  totalUsers: number // need to fix any
  onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
  users: Array<UserType>
}
// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler, users} // деструктуризация пропсов
) => {
  return (
    <>
    <div className={s.form}>
      <Input onKeyPressHandler={onKeyPressHandler} value={name} onChange={setNameCallback} error={error}/>
      <span className={s.errorText}>{error}</span>
      <Button name={'add'} callBack={addUser} />
      <span>{totalUsers}</span>
    </div>
      <ul className={s.user__list}>
        {users.map(u => {
          return <li key={u._id} className={s.user__item}>{u.name}</li>
        })}
      </ul>
    </>
  )
}

export default Greeting
