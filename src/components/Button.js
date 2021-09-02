import React from 'react';
import './Button.css';
import { Link } from 'fract-router-dom';

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.uncludes(buttonStyle) ? buttonStyle : STYLES[0];
}




export default Button;
