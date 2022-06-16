import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'
function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const onChangeRange = (value: number) => {
    setValue1(value)
  }

  const onChangeRangeDoubleRange = (arr: Array<number>) => {
    let [value1, value2] = arr
    setValue1(value1)
    setValue2(value2)
  }

  return (
    <div>
      <hr/>
      homeworks 11

      {/*should work (должно работать)*/}
      <div>
        <p className={s.value}>{value1}</p>
        <SuperRange value={value1} onChangeRange={onChangeRange}
          // сделать так чтоб value1 изменялось
        />
        <span>{value2}</span>
      </div>

      <div>
        <p className={s.value}>{value1}</p>
        <SuperDoubleRange value={[value1, value2]} onChangeRange={onChangeRangeDoubleRange}
          // сделать так чтоб value1 и value2 изменялось
        />

      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11
