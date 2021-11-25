import React from 'react'

export default function HeroSection(props) {
    return (
        <article  className = {props.className}>
            <header className ='flow flow--space-small'>
                <h2 className = {props.subject.role.cName}>{props.subject.role.title}</h2>
                <p className = {props.subject.header.cName}>{props.subject.header.name}</p>
            </header>
            <p className = "text-accent">
                {props.subject.description}
            </p>
        </article>
    )
}
