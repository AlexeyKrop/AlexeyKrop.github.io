import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>// need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any
  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // need to fix any
    setName(e.currentTarget.value) // need to fix
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError('')
    if (e.key === 'Enter') {
      addUser()
    }

  }
  const addUser = () => {
    if (name.trim()) {
      alert(`Hello + ${name.trim()}  !`)
      addUserCallback(name.trim())
      setName('')
    } else {
      setError('Введите имя')
    }
  }

  const totalUsers = users.length // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      users={users}
      error={error}
      totalUsers={totalUsers}
      onKeyPressHandler={onKeyPressHandler}
    />
  )
}

export default GreetingContainer
