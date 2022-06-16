import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import s from '../../HW11.module.css'
import SuperRange from "../c7-SuperRange/SuperRange";

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: [number, number]) => void
  value: [number, number]
  // min, max, step, disable, ...

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {

    onChangeRange, value
    // min, max, step, disable, ...
  }
) => {
  const [minVal, setMinVal] = useState<number>(0);
  const [maxVal, setMaxVal] = useState<number>(100);
  const range = useRef<HTMLDivElement>(null);

  const onChangeMinRange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.currentTarget.value), maxVal - 15)
    setMinVal(value)
    onChangeRange && onChangeRange([minVal, maxVal])
  }

  const onChangeMaxRange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.currentTarget.value), minVal + 15)
    setMaxVal(value)
    onChangeRange && onChangeRange([minVal, maxVal])

  }
    if (range.current) {
      range.current.style.left = `${1}%`;
      range.current.style.width = `${minVal * 1.4}px`;
    }

  // сделать самому, можно подключать библиотеки
  return (

    <>

      <input className={`${s.thumb} ${s.thumb_left}`} type="range" value={value[0]} onChange={onChangeMinRange}/>
      <input className={`${s.thumb} ${s.thumb_right}`} type="range" value={value[1]} onChange={onChangeMaxRange} />


        <div className={s.slider}>
          <div className={s.slider__track}/>
          <div ref={range} className={s.slider__range}/>
          {/*<div className={s.slider__left_value}>{minVal}</div>*/}
          {/*<div className={s.slider__right_value}>{maxVal}</div>*/}
        </div>


    </>
  )
}

export default SuperDoubleRange
