import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
  name: string
  callBack: () => void
}
const Button = (props: ButtonPropsType) => {
  const onClickBtnHandler = () => {
    props.callBack()
  }
  return (
      <button className={props.className} onClick={onClickBtnHandler}>{props.name}</button>
  );
};

export default Button;