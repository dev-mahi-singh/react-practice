import React from 'react'
import Tag from './Tag'

const Center = (props) => {
    return (
        <div className="center">
            <img src={props.profile} alt="" />
            <h2>{props.name}</h2>
            <p>{props.developer}</p>
            <Tag skills={props.skills} />
            <p>{props.about}</p>
        </div>
    )
}

export default Center