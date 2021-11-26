import {React, useState} from 'react'
import { numberItems } from './NumberItems'

export default function NumberIndicators(props) {
    const [selectedNumber, setNumber] = useState(0);

    function handleIndicatorChange(id){
        setNumber(id);
        props.onIndicatorChange(id);
    }

    return (
        <div className = 'numbered-indicators flex'>
             {numberItems.map((item, index)=>{
                return(
                    <button
                        key={item.id} 
                        aria-selected = {item.id === selectedNumber ? true : false}
                        className = {item.cName}
                        onClick = {()=>handleIndicatorChange(item.id)}
                    >{item.title}</button>
                )
            })}
        </div>
    )
}
