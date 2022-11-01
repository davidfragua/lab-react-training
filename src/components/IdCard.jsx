import React from 'react'

function IdCard(props) {
  return (
    <div>
        <img src={props.people.picture} alt="" />
        <p><b>First name:</b> {props.people.firstName}</p>
        <p><b>Last name:</b> {props.people.lastName}</p>
        <p><b>Gender:</b> {props.people.gender}</p>
        <p><b>Height:</b> {props.people.height}m</p>
        <p><b>Birth:</b> {(props.people.birth).toString()}</p>
    </div>
    
)
}

export default IdCard