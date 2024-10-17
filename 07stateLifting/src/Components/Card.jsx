import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=> props.setname(e.target.value)}/>
      <h1>nai value : {props.name}</h1>
    </div>
  )
}

export default Card
