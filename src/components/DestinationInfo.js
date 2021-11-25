import React from 'react'

export default function DestinationInfo(props) {
    return (
        <article className = "destination-info flow">
            <h2 className = "fs-800 uppercase ff-serif">{props.destination.name}</h2>
        <p>{props.destination.description}</p>
        <div className ='destination-meta flex'>
            <div>
                <h3 className = 'text-accent fs-200 uppercase'>Avg. distance</h3>
                <p className = 'ff-serif uppercase'>{props.destination.distance}</p>
            </div>
            <div>
                <h3 className = 'text-accent fs-200 uppercase'>Est. travel time</h3>
                <p className = 'ff-serif uppercase'>{props.destination.travel}</p>
            </div>
        </div>
    </article>
    )
}
