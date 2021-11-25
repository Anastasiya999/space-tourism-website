import React from 'react'

export default function NumberedTitle(props) {
    return (
        <h1 className = "numbered-title"><span aria-hidden={true}>{props.number}</span>{props.title}</h1>
    )
}
