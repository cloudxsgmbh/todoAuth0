import React from 'react'

const Item = (props) => {
    return (
        <li>
            <label>
                <input type="checkbox" onChange={props.clickHandler} checked={props.done || false} />
                <span>{props.text}</span>
            </label>
        </li>
    )
}


export default Item;