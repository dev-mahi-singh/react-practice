import React from 'react'

const Tag = (props) => {
  return (
   <div className='tag'>
            <h3>{props.skills[0]}</h3>
            <h3>{props.skills[1]}</h3>
            <h3>{props.skills[2]}</h3>
            <h3>{props.skills[3]}</h3>
          </div>
  )
}

export default Tag