import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affairs.module.css'
import Button from "./Common/Button";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType
  deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = (id: number) => {
    props.deleteAffairCallback(id)
  }// need to fix

  return (
    <div className={classes.item}>
      {props.affair.name}
      <Button name={'X'} className={`${classes.button} ${classes.btn}`} callBack={() => {deleteCallback(props.affair._id)}}/>
    </div>
  )
}

export default Affair
