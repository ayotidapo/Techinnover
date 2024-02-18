import React from 'react'
import './button.css'

interface Props{
  children: React.ReactNode;
  className?: string
}

const Button:React.FC<Props> = (props:Props) => {
  const {children, className} = props
  return (
   <button className={`btn ${className || ''}`}>{children}</button>
  )
}

export default Button