import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css'
import Button from "./Common/Button";

type AffairsPropsType = { // need to fix any
  data: Array<AffairType>
  setFilter: (value: FilterType) => void
  deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = (value: FilterType) => {
    props.setFilter(value)
  } // need to fix
  const setHigh = (value: FilterType) => {
    props.setFilter(value)
  }
  const setMiddle = (value: FilterType) => {
    props.setFilter(value)
  }
  const setLow = (value: FilterType) => {
    props.setFilter(value)
  }

  return (
    <div className={classes.wrapper}>
      {mappedAffairs}
      <div className={classes.button__group}>
        <Button name={'low'} className={classes.button} callBack={() => {
          setLow('low')
        }}/>
        <Button name={'middle'} className={classes.button} callBack={() => {
          setMiddle('middle')
        }}/>
        <Button name={'high'} className={classes.button} callBack={() => {
          setHigh('high')
        }}/>
        <Button name={'all'} className={classes.button} callBack={() => {
          setAll('all')
        }}/>
      </div>
    </div>
  )
}

export default Affairs
