import React from 'react'

function Card1(props) {
  return (
    <div>
      {props.label}
      {' '}
      <input
        value={props.text}
        onChange={(e)=>{props.settext(e.target.value)}}
      />
    </div>
  )
}

export default Card1
