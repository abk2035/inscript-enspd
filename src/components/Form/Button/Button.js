import React from 'react';
import'./Button.css';

const Button = ({ value, width, height, click }) => {
  return (
    <button style={{width:`${width}`||'80px', height:`${height}`||'30px'}} onClick={ click() }>
        { value }
    </button>
  )
}

export default Button ;