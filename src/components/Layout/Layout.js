import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true })
        console.log('Open')
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
        console.log('change')
    }


    render() {
        return (
            <Aux>
                <div>
                    <Toolbar
                        open={this.sideDrawerOpenHandler} />
                    <SideDrawer
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler} />

                </div>
                <main className='content'>
                    {this.props.children}
                </main>
            </Aux>

        )
    }

}

export default Layout

