import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void

}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions: any = options?.map((o, index) => {
    return <option key={index}>{o}</option>
  }); // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)
    // if(onChange) onChange(e)
  }

  return (
    <select className={'select-css'} value={restProps.value} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
