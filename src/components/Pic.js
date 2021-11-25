import React from 'react'

export default function Pic(props) {
    return (
        <picture>
                <source srcSet={props.src.images.webp} type="image/webp" />
                <img src={props.src.images.png} alt={props.src.name} />
        </picture>
    )
}
