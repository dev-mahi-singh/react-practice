import React from 'react'
import Top from './Top'
import Center from './Center'
import Bottom from './Bottom'

const Card = (props) => {
  return (
     <div className="card">
      <Top pay={props.pay} />
      <Center profile={props.profile} name={props.name} developer={props.developer} skills={props.skills} about={props.about} />
      <Bottom />
      </div>
  )
}

export default Card