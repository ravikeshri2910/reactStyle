import React from 'react';

import './Button.css';

const Button = props => {

  console.log('props.isValid' + props.isValid)

  return (
    // <button type={props.type} className={`button ${!props.isValid ? 'inVaild' : ""}`} onClick={props.onClick}>
    <button style={{backgroundColor : !props.isValid ? '#f8a799' : '#ac0e77' }} type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
