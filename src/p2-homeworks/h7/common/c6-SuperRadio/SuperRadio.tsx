import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: string[]
  onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)
  }


  const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
    <label key={name + '-' + i} >
      <input
        checked={value === o}
        type={'radio'}
        onChange={onChangeCallback}
        name={name}
        value={o}
        className={ 'real-radio-btn'}
        // name, checked, value, onChange
      />
      <span className="custom-radio-btn"/>
      <span>{o}</span>
    </label>
  )) : []

  return (
    <>
      {mappedOptions}
    </>
  )
}

export default SuperRadio
