import React from 'react'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },


]
const BuildControls = (props) => {
    return (
        <div className="BuildControls">
            {controls.map(i => (
                <BuildControl
                    key={i.label}
                    label={i.label}
                    added={() => props.ingredientAdded(i.type)}
                    removed={() => props.ingredientRemoved(i.type)}
                    disabled={props.disabled[i.type]} />

            ))}
        </div>
    )
}

export default BuildControls
