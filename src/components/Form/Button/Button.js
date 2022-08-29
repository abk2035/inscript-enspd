import React from 'react';
import'./Button.css';

const Button = ({ children, width, height, click }) => {
  return (

      <button style={{ width:`${width}`, height:`${height}` } } onClick={ click() }>
        <div> { children } </div>
      </button>
    
  )
}

export default Button ;