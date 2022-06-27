import React from "react";
import Style from './Button.module.scss'

export type ButtonProps ={
  children: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
}
export function Button(props: ButtonProps) {
  const { type = 'button' } = props
  return <button type={type} className={Style.botao} onClick={props.onClick}>{props.children}</button>;
}
