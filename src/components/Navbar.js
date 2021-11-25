import React from "react";
import {navItems} from './NavItems'
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Navbar(props){
    const location = useLocation();
    return(
        <nav>
            <ul className='primary-navigation underline-indicators flex' data-visible = {props.dataVisible} >
                {navItems.map((item) => {
                    return (
                    <li key={item.id} className={location.pathname === item.path ? 'active':''}>
                        <NavLink 
                            to={item.path} 
                            exact
                            className={item.cName}>
                            <span aria-hidden="true">0{item.id}</span>
                            {item.title}
                        </NavLink>
                    </li>)
                })}  
            </ul>
        </nav> 
    )
}

export default Navbar