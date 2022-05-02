import React from 'react'
import { NavLink } from 'react-router-dom';
import {PATH} from "./Pages";
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {
    return (
        <div className={s.list__link}>
            <NavLink className={s.link} to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR}>JUNIOR</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>JUNIOR_PLUS</NavLink>

        </div>
    )
}

export default Header
