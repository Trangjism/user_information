import React from 'react';
import './CardStyled.css';


export default function CardStyled(props) {
  return (
    <div className='card'>{props.children}</div>
  )
}
