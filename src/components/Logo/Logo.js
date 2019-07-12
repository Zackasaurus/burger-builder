import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'

const Logo = (props) => {
    return (
        <div className={props.className} >
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    )
}

export default Logo
