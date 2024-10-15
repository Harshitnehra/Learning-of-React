import React from 'react'

const card = ({children} ,{name}) => {
  return (
    <div>
    <p>add two num {name}</p>
    {children}
    </div>
  )
}

export default card
