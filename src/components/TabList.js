import React from 'react'
import { useState } from 'react';
import { tabItems } from './TabItems';

export default function TabList(props) {
    const [selectedTab, setTab] = useState(0);

    function handleTabChange(id){
        setTab(id);
        props.onTabChange(id);
    }

    return (
        <div className = 'tab-list underline-indicators flex'>
            {tabItems.map((item) => {
                return (
                    <button 
                        key={item.id} 
                        aria-selected = {item.id === selectedTab ? true : false}
                        aria-controls = {item.ariaControls}
                        data-image = {item.image}
                        className = {item.cName}
                        onClick = {()=>handleTabChange(item.id)}
                        >
                            {item.title}
                    </button>
                )
            })}
        </div>
    )
}
