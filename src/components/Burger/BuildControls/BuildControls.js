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
            <p>Current Price:  <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(i => (
                <BuildControl
                    key={i.label}
                    label={i.label}
                    added={() => props.ingredientAdded(i.type)}
                    removed={() => props.ingredientRemoved(i.type)}
                    disabled={props.disabled[i.type]} />

            ))}
            <button
                className="OrderButton"
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>

    )
}

export default BuildControls
