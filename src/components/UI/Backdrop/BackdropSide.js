import React from 'react'

const BackdropSide = (props) => {

    let attachedClasses = ['Backdrop', 'Backdrop--Off']

    if (props.show) {
        attachedClasses = ['Backdrop', 'Backdrop--On']
    }

    return (
        <div
            className={attachedClasses.join(' ')}
            onClick={props.clicked}>

        </div>
    )
}

export default BackdropSide
