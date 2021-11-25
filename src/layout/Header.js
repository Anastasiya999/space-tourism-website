import {React, useState} from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/shared/logo.svg';
import Logo from '../components/Logo';

export default function Header(props) {
    const [menu, setMenu] = useState({
        isExpanded : false,
        isVisible: false
    });

    function handleMenuToggle(){
        setMenu(prev=>{
            return{
                isExpanded: !prev.isExpanded,
                isVisible: !prev.isVisible};
        })
    }
    return (
        <header className="primary-header flex">
            <Logo src = {logo} alt ='space tourism logo'/>
            <button className="mobile-nav-toggle" aria-controls="primary-navigation" onClick = {handleMenuToggle} aria-expanded={menu.isExpanded}><span className="sr-only">Menu</span></button>
            <Navbar dataVisible={menu.isVisible} />
        </header>
    )
}
