import React from 'react'


function Random(props) {

    
  return (
    
    // <div>Random value between {props.min} and {props.max} => {Math.random(Math.floor(props.min,props.max))}</div>
    <div>Random value between {props.min} and {props.max} is {Math.floor(Math.random()*(props.max - props.min +1))+ props.min}</div>

  )
}

export default Random