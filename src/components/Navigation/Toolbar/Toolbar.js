import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div className='MenuBtn' onClick={props.toggle}>
                <div className="MenuBtn__Lines"></div>
                <div className="MenuBtn__Lines"></div>
                <div className="MenuBtn__Lines"></div>
            </div>
            <Logo className='Logo' />
            <nav className='DesktopOnly'>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar
