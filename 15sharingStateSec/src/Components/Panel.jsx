import React from 'react'

const Panel = (props) => {
  return (
    <div>
      <h2>{props.tital}</h2>
      {
        props.activeIndex ? (
            <p>{props.children}</p>
          ): (<button onClick={props.setActiveIndex}>
            show
          </button>)
      }
    </div>
  )
}

export default Panel
