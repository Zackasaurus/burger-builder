import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div onClick={props.open}>MENU</div>
            <Logo className='Logo' />
            <nav className='DesktopOnly'>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar
