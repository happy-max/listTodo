import React from 'react'
import './list.css'
import ListItem from "./List-item"

const List = ({todos, onDeleteItem, onToggleDone, onToggleImportant}) => {
    const context = todos.map((item) => {
        const {id, ...itemProp} = item
        return (
            <li key={id} className='list-group-item '>
                <ListItem
                    {...itemProp}
                    onDeleteItem = {() => onDeleteItem(id)}
                    onToggleDone = {() => onToggleDone(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                />
            </li>
        )
    })
    return (

            <ul className="list-group">
                {context}
            </ul>
    )
}


export default List

