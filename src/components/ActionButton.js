import React from 'react'
import { Link } from 'react-router-dom'

export default function ActionButton(props) {
    return (
        <div>
            <Link to={props.path} className="large-button uppercase ff-serif text-dark bg-white">{props.children}</Link>
        </div> 
    )
}
