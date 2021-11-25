import React from 'react'

export default function Grid(props) {
    return (
        <main className ={"grid-container ".concat(props.cName)} >
            {props.children}
        </main>
    )
}
