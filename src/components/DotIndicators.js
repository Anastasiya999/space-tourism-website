import React from 'react';
import {dotItems} from './DotItems'
import {useState} from 'react'

export default function DotIndicators(props) {
    const [selectedIndicator, setIndicator] = useState(0);

    function handleIndicatorChange(id){
        setIndicator(id);
        props.onIndicatorChange(id);
    }
    return (
        <div className = "dot-indicators flex">
            {dotItems.map((item, index)=>{
                return(
                    <button
                        key={item.id} 
                        aria-selected = {item.id === selectedIndicator ? true : false}
                        onClick = {()=>handleIndicatorChange(item.id)}
                    ><span class="sr-only">{item.title}</span></button>
                )
            })}
        </div>
    )
}
