import React from 'react'

export default function BodyWrapper(props) {
    return (
        <div className={"page-common ".concat(props.cName)}>
            {props.children}
        </div>
    )
}
