import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import BackdropSide from '../../UI/Backdrop/BackdropSide'
import Aux from '../../../hoc/Aux'

const SideDrawer = (props) => {

    let attachedClasses = ['SideDrawer', 'Close']

    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']

    }


    return (
        <Aux>
            <div className='SideMenu'>

                <BackdropSide show={props.open} clicked={props.closed} />
                <div className={attachedClasses.join(' ')}>

                    <div>
                        <Logo className={'Logo__SideDrawer'} />
                    </div>

                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
            </div>

        </Aux>
    )
}

export default SideDrawer
