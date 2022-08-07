import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Pages";
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {
  const setActive = ({isActive}: { isActive: boolean }) => isActive ? `${s.active}` : `${s.link}`
  return (
    <div className={s.list__link}>
      <NavLink className={setActive} to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
      <NavLink className={setActive} to={PATH.JUNIOR}>JUNIOR</NavLink>
      <NavLink className={setActive} to={PATH.JUNIOR_PLUS}>JUNIOR_PLUS</NavLink>

    </div>
  )
}

export default Header
