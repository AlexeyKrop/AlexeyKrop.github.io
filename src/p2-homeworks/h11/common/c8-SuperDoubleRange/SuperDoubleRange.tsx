import React, {useEffect, useRef, useState} from 'react'
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

  const onChangeMinRange = (e: any) => {
    const value = Math.min(Number(e.currentTarget.value), maxVal - 1)
    setMinVal(value)
    onChangeRange && onChangeRange([minVal, maxVal])
  }

  const onChangeMaxRange = (e: any) => {
    const value = Math.max(Number(e.currentTarget.value), minVal + 1)
    setMaxVal(value)
    onChangeRange && onChangeRange([minVal, maxVal])

  }
  const animate = ({ timing, draw, duration }: any) => {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
      draw(progress); // отрисовать её
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  };
    if (range.current) {
      range.current.style.left = `${10}%`;
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
          <div className={s.slider__left_value}>{minVal}</div>
          <div className={s.slider__right_value}>{maxVal}</div>
        </div>

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
