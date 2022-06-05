import React, {useState} from 'react'
import s from '../../HW11.module.css'
import SuperRange from "../c7-SuperRange/SuperRange";
type SuperDoubleRangePropsType = {
    // onChangeRange?: (value: [number, number]) => void
    // value?: [number, number]
    onChangeRange?: (value:number) => void
    // min, max, step, disable, ...
  value: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {

        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
  // const [minVal, setMinVal] = useState<number>(min);
  // const [maxVal, setMaxVal] = useState<number>(max);
    return (
        <>
          <SuperRange value={value} onChangeRange={onChangeRange}/>
          {/*<div className="container">*/}
          {/*  <input*/}
          {/*    type="range"*/}
          {/*    min={min}*/}
          {/*    max={max}*/}
          {/*    value={minVal}*/}
          {/*    onChange={(event) => {*/}
          {/*      const value = Math.min(Number(event.target.value), maxVal - 1);*/}
          {/*      setMinVal(value);*/}
          {/*    }}*/}
          {/*    className={`${s.thumb} ${s.thumb_left}`}*/}
          {/*  />*/}
          {/*  <input*/}
          {/*    type="range"*/}
          {/*    min={min}*/}
          {/*    max={max}*/}
          {/*    value={maxVal}*/}
          {/*    onChange={(event) => {*/}
          {/*      const value = Math.max(Number(event.target.value), minVal + 1);*/}
          {/*      setMaxVal(value);*/}
          {/*    }}*/}
          {/*    className={`${s.thumb} ${s.thumb_right}`}*/}
          {/*  />*/}
          {/*  <div className={s.slider}>*/}
          {/*    <div className={s.slider__track}/>*/}
          {/*    <div className={s.slider__range}/>*/}
          {/*    <div className={s.slider__left_value}>{minVal}</div>*/}
          {/*    <div className={s.slider__right_value}>{maxVal}</div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </>
    )
}

export default SuperDoubleRange
