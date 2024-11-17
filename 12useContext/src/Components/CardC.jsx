import React from 'react'
import { usercontext } from '../App'
import { useContext } from 'react'


const CardC = () => {
    const user = useContext(usercontext)
  return (
    <div>
      {user.name}
    </div>
  )
}

export default CardC
