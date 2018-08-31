import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {
  return (
    <div className={props.className ? `Button ${props.className}` : 'Button'}>
      <div className="Button__outline"></div>
      <span>{props.text}</span>
      {props.icon && <FontAwesomeIcon className="Button__icon ml-3" icon={props.icon} />}
    </div>
  )
}

export default Button
