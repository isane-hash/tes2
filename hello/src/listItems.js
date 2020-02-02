import React from 'react';
import './listItems.css'

function listItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className = "list"
        key = "item.key" >
            <
            p > (item.text) < /p> < /
            div >
    })
    return ( <
        div > { listItems } < /div>

    )
}
export default listItems;