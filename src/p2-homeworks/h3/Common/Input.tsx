import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';
import s from "../Greeting.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPressHandler?: (e: KeyboardEvent<HTMLInputElement>) => void
  error?: string
  value?: string
}
const Input = (props: SuperInputTextPropsType) => {
  return (
    <input className={props.error ? s.error: s.validate} onKeyPress={props.onKeyPressHandler} onChange={props.onChange}  value={props.value} type="text"/>
  );
};

export default Input;