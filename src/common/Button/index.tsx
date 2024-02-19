import React from 'react'
import './button.css'

interface Props{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button:React.FC<Props> = (props:Props) => {
  const {children, className, onClick } = props
  return (
   <button className={`btn ${className || ''}`} onClick={onClick}>{children}</button>
  )
}

export default Button