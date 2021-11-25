import React from 'react'

export default function Logo(props) {
    return (
        <div>
            <img src = {props.src} alt={props.alt} className = 'logo' />
        </div>
    )
}
