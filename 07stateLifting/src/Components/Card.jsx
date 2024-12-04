import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=> props.setname(e.target.value)} />
     <p>state ki value change ho rahi hai: {props.name}</p>
    </div>
  )
}

export default Card
